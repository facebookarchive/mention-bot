/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

'use strict';

var minimatch = require('minimatch');

type WhitelistUser = {
  name: string,
  files: Array<string>
};

function getSortedOwners(
  owners: { [key: string]: number }
): Array<string> {
  var sorted_owners = Object.keys(owners);
  sorted_owners.sort(function(a, b) {
    var countA = owners[a];
    var countB = owners[b];
    return countA > countB ? -1 : (countA < countB ? 1 : 0);
  });
  return sorted_owners;
}

function getMatchingOwners(
  files: Array<string>,
  whitelist: Array<WhitelistUser>
): Array<string> {
  var owners = [];
  var users = whitelist || [];

  users.forEach(function(user) {
    let userHasChangedFile = false;

    user.files.forEach(function(pattern) {
      if (!userHasChangedFile) {
        userHasChangedFile = files.find(function(file) {
          return minimatch(file, pattern);
        });
      }
    });

    if (userHasChangedFile && owners.indexOf(user.name) === -1) {
      owners.push(user.name);
    }
  });

  return owners;
}

async function getFilesPath(
  user: string,
  repo: string,
  number: number,
  github: Object
): Promise<Array<string>> {
  return new Promise(function(resolve, reject) {
    github.pullRequests.getFiles({
      user: user, repo: repo, number: number
    }, function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result.map(function(file) {
          return file.filename;
        }));
      }
    });
  });
}

async function getCommitsAuthors(
  user: string,
  repo: string,
  path: string,
  github: Object
): Promise<Array<string>> {
  return new Promise(function(resolve, reject) {
    github.repos.getCommits({
      user: user, repo: repo, path: path
    }, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result.reduce(function(acc, commit) {
          if (!commit.author) {
            // Safeguard against missing authors
            return acc;
          }
          if (acc.has(commit.author.login)) {
            acc.set(commit.author.login, acc.get(commit.author.login) + 1);
          } else {
            acc.set(commit.author.login, 1);
          }
          return acc;
        }, new Map()));
      }
    });
  });
}

async function getOwnerOrgs(
  owner: string,
  github: Object
): Promise<Array<string>> {
  return new Promise(function(resolve, reject) {
    github.orgs.getForUser({ user: owner }, function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(
          result.map(function (obj){
            return obj.login;
          })
        );
      }
    });
  });
}

async function getMembersOfOrg(
  org: string,
  github: Object,
  page: number
): Promise<Array<string>> {
  const perPage = 100;
  return new Promise(function(resolve, reject) {
    github.orgs.getMembers({
      org: org,
      page: page,
      per_page: perPage
    }, function(err, members) {
      if (err) {
        reject(err);
      } else {
        var logins = members.map(function (obj){
          return obj.login;
        })
        if(logins.length === perPage) {
          getMembersOfOrg(org, github, ++page).then(function(results) {
            resolve(logins.concat(results));
          })
          .catch(reject);
        } else {
          resolve(logins);
        }
      }
    });
  });
}

async function filterRequiredOrgs(
  owners: Array<string>,
  config: Object,
  github: Object
): Promise<Array<string>> {
  var promises = owners.map(function(owner) {
    return getOwnerOrgs(owner, github);
  });

  var userOrgs = await Promise.all(promises);
  return owners.filter(function(owner, index) {
    // user passes if he is in any of the required organizations
    return config.requiredOrgs.some(function(reqOrg) {
      return userOrgs[index].indexOf(reqOrg) >= 0;
    });
  });
}

/**
 * If the repo is private than we should only mention users that are still part
 * of that org.
 * Otherwise we could end up with a situation where all the people mentioned have
 * left the org and none of the current staff get notified
**/

async function filterPrivateRepo(
  owners: Array<string>,
  org: string,
  github: Object
): Promise<Array<string>> {
  var currentMembers = await getMembersOfOrg(org, github, 0);

  return owners.filter(function(owner, index) {
    // user passes if they are still in the org
    return currentMembers.some(function(member) {
      return member === owner;
    });
  });
}

/**
 * The problem at hand is to find a set of three best effort people that have
 * context on a pull request. It doesn't (and actually can't) be perfect.
 *
 * The most precise information we have is when someone deletes or modifies
 * a line of code. We know who last touched those lines and they are most
 * likely good candidates for reviewing the code.
 * This is of course not always the case, people can codemod big number of
 * lines and have very little context on that particular one, people move
 * file around and absorb all the blame...
 *
 * But, not all pull requests modify code, many of them just add new lines.
 * I first played with giving credit to people that blamed the lines around
 * but it was unclear how to spread out the credit.
 * A much dumber strategy but which has proven to be effective is to
 * completely ignore new lines and instead find the people that are blamed
 * for the biggest number of lines in the file.
 *
 * Given those two observations, the algorithm is as follow:
 *  - For each line that has been deleted, give 1 ponumber to the blamed author
 *    in a 'deletedOwners' pool.
 *  - For each file that has been touched, for each line in that file, give 1
 *    ponumber to the blamed author in a 'allOwners' pool.
 *  Once you've got those two pools, sort them by number of points, dedupe
 *  them, concat them and finally take the first 3 names.
 */
async function guessOwners(
  owners: { [key: string]: number },
  creator: string,
  defaultOwners: Array<string>,
  fallbackOwners: Array<string>,
  privateRepo: boolean,
  org: ?string,
  config: Object,
  github: Object
): Promise<Array<string>> {
  var guess = Array.from(owners.keys()).sort(function(a, b) {
      return owners.get(b) - owners.get(a);
    }).filter(function(owner) {
      return owner !== creator;
    })
    .filter(function(owner) {
      return config.userBlacklist.indexOf(owner) === -1;
    });

  if (config.requiredOrgs.length > 0) {
    guess = await filterRequiredOrgs(guess, config, github);
  }

  if (privateRepo && org != null) {
    guess = await filterPrivateRepo(guess, org, github);
  }

  if (guess.length === 0) {
    defaultOwners = defaultOwners.concat(fallbackOwners);
  }

  return guess
    .slice(0, config.maxReviewers)
    .concat(defaultOwners)
    .filter(function(owner, index, ownersFound) {
      return ownersFound.indexOf(owner) === index;
    });
}

async function guessOwnersForPullRequest(
  repo: string,
  user: string,
  id: number,
  creator: string,
  targetBranch: string,
  privateRepo: boolean,
  org: ?string,
  config: Object,
  github: Object
): Promise<Array<string>> {
  var files = await getFilesPath(user, repo, id, github);
  var defaultOwners = getMatchingOwners(files, config.alwaysNotifyForPaths);
  var fallbackOwners = getMatchingOwners(files, config.fallbackNotifyForPaths);
  if (!config.findPotentialReviewers) {
      return defaultOwners;
  }

  // remove files that match any of the globs in the file blacklist config
  config.fileBlacklist.forEach(function(glob) {
    files = files.filter(function(file) {
      return !minimatch(file, glob);
    });
  });
  files = files.slice(0, config.numFilesToCheck);

  // create authors promises (allows concurrent loading)
  let promises = files.map(function(file) {
    return getCommitsAuthors(user, repo, file, github);
  });

  // wait for all promises to resolve
  let results = await Promise.all(promises);
  let owners = results.reduce(function(acc, owners) {
    for (let [owner, commits] of owners) {
      if (acc.has(owner)) {
        acc.set(owner, acc.get(owner) + commits);
      } else {
        acc.set(owner, commits);
      }
    }
    return acc;
  }, new Map());

  // This is the line that implements the actual algorithm, all the lines
  // before are there to fetch and extract the data needed.
  return guessOwners(owners, creator, defaultOwners, fallbackOwners, privateRepo, org, config, github);
}

module.exports = {
  guessOwnersForPullRequest: guessOwnersForPullRequest,
};
