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

var downloadFileSync = require('download-file-sync');
var fs = require('fs');
var git = require('git-tools');

type FileInfo = {
  path: string,
  deletedLines: Array<number>,
};

function startsWith(str, start) {
  return str.substr(0, start.length) === start;
}

function parseDiffFile(lines: Array<string>): FileInfo {
  var deletedLines = [];

  // diff --git a/path b/path
  var line = lines.pop();
  if (!line.match(/^diff --git a\//)) {
    throw new Error('Invalid line, should start with `diff --git a/`, instead got \n' + line + '\n');
  }
  var fromFile = line.replace(/^diff --git a\/(.+) b\/.+/g, '$1');

  // index sha..sha mode
  line = lines.pop();
  if (startsWith(line, 'deleted file') ||
      startsWith(line, 'new file')) {
    line = lines.pop();
  }

  line = lines.pop();
  if (startsWith(line, 'Binary files')) {
    // We just ignore binary files (mostly images). If we want to improve the
    // precision in the future, we could look at the history of those files
    // to get more names.
  } else if (startsWith(line, '--- ')) {
    // +++ path
    line = lines.pop();
    if (!line.match(/^\+\+\+ /)) {
      throw new Error('Invalid line, should start with `+++`, instead got \n' + line + '\n');
    }

    var currentFromLine = 0;
    while (lines.length > 0) {
      line = lines.pop();
      if (startsWith(line, 'diff --git')) {
        lines.push(line);
        break;
      }

      // @@ -from_line,from_count +to_line,to_count @@ first line
      if (startsWith(line, '@@')) {
        var matches = line.match(/^\@\@ -([0-9]+),?([0-9]+)? \+([0-9]+),?([0-9]+)? \@\@/);
        if (!matches) {
          continue;
        }

        var from_line = matches[1];
        var from_count = matches[2];
        var to_line = matches[3];
        var to_count = matches[4];

        currentFromLine = +from_line;
        continue;
      }

      if (startsWith(line, '-')) {
        deletedLines.push(currentFromLine);
      }
      if (!startsWith(line, '+')) {
        currentFromLine++;
      }
    }
  }

  return {
    path: fromFile,
    deletedLines: deletedLines,
  };
}

function parseDiff(diff: string): Array<FileInfo> {
  var files = [];
  // The algorithm is designed to be best effort. If the http request failed
  // for some reason and we get an empty file, we should not crash.
  if (!diff) {
    return files;
  }

  var lines = diff.trim().split('\n');
  // Hack Array doesn't have shift/unshift to work from the beggining of the
  // array, so we reverse the entire array in order to be able to use pop/add.
  lines.reverse();

  while (lines.length > 0) {
    files.push(parseDiffFile(lines));
  }

  return files;
}

/**
 * Sadly, github doesn't have an API to get line by line blame for a file.
 * We could git clone the repo and blame, but it's annoying to have to
 * maintain a local git repo and the blame is going to be name + email instead
 * of the github username, so we'll have to do a http request anyway.
 *
 * There are two main ways to extract information from an HTML file:
 *   - First is to work like a browser: parse the html, build a DOM tree and
 *     use a jQuery-like API to traverse the DOM and extract what you need.
 *     The big issue is that creating the DOM is --extremely-- slow.
 *   - Second is to use regex to analyze the outputted html and find whatever
 *     we want.
 *
 * I(vjeux)'ve scraped hundreds of websites using both techniques and both of
 * them have the same reliability when it comes to the website updating their
 * markup. If they change what you are extracting you are screwed and if they
 * change something around, both are resistant to it when written properly.
 * So, might as well use the fastest one of the two: regex :)
 */
function parseBlame(blame: string): Array<string> {
  // The way the document is structured is that commits and lines are
  // interleaved. So everytime we see a commit we grab the author's name
  // and everytime we see a line we log the last seen author.
  var re = /(rel="contributor">([a-z0-9]+)<\/a> authored|<tr class="blame-line">)/g;

  var currentAuthor = 'none';
  var lines = [];
  var match;
  while (match = re.exec(blame)) {
    if (match[2]) {
      currentAuthor = match[2];
    } else {
      lines.push(currentAuthor);
    }
  }

  return lines;
}

function getDeletedOwners(
  files: Array<FileInfo>,
  blames: { [key: string]: Array<string> }
): { [key: string]: number } {
  var owners = {};
  files.forEach(function(file) {
    var blame = blames[file['path']];
    if (!blame) {
      return;
    }
    file.deletedLines.forEach(function (line) {
      // In a perfect world, this should never fail. However, in practice, the
      // blame request may fail, the blame is checking against master and the
      // pull request isn't, the blame file was too big and the curl wrapper
      // only read the first n bytes...
      // Since the output of the algorithm is best effort, it's better to just
      // swallow errors and have a less accurate implementation than to crash.
      var name = blame[line - 1];
      if (!name) {
        return;
      }
      owners[name] = (owners[name] || 0) + 1;
    });
  });
  return owners;
}

function getAllOwners(
  files: Array<FileInfo>,
  blames: { [key: string]: Array<string> }
): { [key: string]: number } {
  var owners = {};
  files.forEach(function(file) {
    var blame = blames[file.path];
    if (!blame) {
      return;
    }
    for (var i = 0; i < blame.length; ++i) {
      var name = blame[i];
      if (!name) {
        return;
      }
      owners[name] = (owners[name] || 0) + 1;
    }
  });
  return owners;
}

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

/**
 * While developing/debugging the algorithm itself, it's very important not to
 * make http requests to github. Not only it's going to make the reload cycle
 * much slower, it's also going to temporary/permanently ban your ip and
 * you won't be able to get anymore work done when it happens :(
 */
function fetch(url: string): string {
  if (!module.exports.enableCachingForDebugging) {
    return downloadFileSync(url);
  }

  var cacheDir = __dirname + '/cache/';

  if (!fs.existsSync(cacheDir)) {
    fs.mkdir(cacheDir);
  }
  var cache_key = cacheDir + url.replace(/[^a-zA-Z0-9-_\.]/g, '-');
  if (!fs.existsSync(cache_key)) {
    var file = downloadFileSync(url);
    fs.writeFileSync(cache_key, file);
  }
  return fs.readFileSync(cache_key, 'utf8');
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
function guessOwners(
  files: Array<FileInfo>,
  blames: { [key: string]: Array<string> }
): Array<string> {
  var deletedOwners = getDeletedOwners(files, blames);
  var allOwners = getAllOwners(files, blames);

  deletedOwners = getSortedOwners(deletedOwners);
  allOwners = getSortedOwners(allOwners);

  // Remove owners that are also in deletedOwners
  var deletedOwnersSet = new Set(deletedOwners);
  var allOwners = allOwners.filter(function(element) {
    return !deletedOwnersSet.has(element);
  });

  return []
    .concat(deletedOwners)
    .concat(allOwners)
    .slice(0, 3);
}

function guessOwnersForPullRequest(
  repoURL: string,
  id: number
  ): Array<string> {

  git.clone({
    repo: repoURL,
    dir: '/tmp/git'
  }, (err, repo) => {
    console.log(repo);
  });

  // var diff = fetch(repoURL + '/pull/' + id + '.diff');
  // var files = parseDiff(diff);

  // // There are going to be degenerated changes that end up modifying hundreds
  // // of files. In theory, it would be good to actually run the algorithm on
  // // all of them to get the best set of reviewers. In practice, we don't
  // // want to do hundreds of http requests. Using the top 5 files is enough
  // // to get us 3 people that may have context.
  // files.sort(function(a, b) {
    // var countA = a.deletedLines.length;
    // var countB = b.deletedLines.length;
    // return countA > countB ? -1 : (countA < countB ? 1 : 0);
  // });
  // files = files.slice(0, 5);

  // var blames = {};
  // files.forEach(function(file) {
    // var path = file.path;
    // var blame = fetch(repoURL + '/blame/master/' + path);
    // blames[path] = parseBlame(blame);
  // });

  // // This is the line that implements the actual algorithm, all the lines
  // // before are there to fetch and extract the data needed.
  // return guessOwners(files, blames);
}

module.exports = {
  enableCachingForDebugging: false,
  parseDiff: parseDiff,
  parseBlame: parseBlame,
  guessOwnersForPullRequest: guessOwnersForPullRequest,
};
