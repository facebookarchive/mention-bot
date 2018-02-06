/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

jest
  .dontMock('../mention-bot.js')
  .dontMock('download-file-sync')
  .dontMock('fs')
  .dontMock('minimatch');

require.requireActual('babel-polyfill');
var mentionBot = require('../mention-bot.js');
var fs = require('fs');
const GitHubApi = require('github');

describe('Github Mention', function() {
  const github = new GitHubApi();

  function getFile(filename) {
    return fs.readFileSync(__dirname + '/data/' + filename, 'utf8');
  }

  xdescribe('Debugging', function() {
    // If you are working on the algorithm itself, it is useful to be able to run
    // the complete flow that downloads the diff and subsequent blames. Since
    // doing http requests is unreliable in tests, it is disabled by default.
    xit('CompleteFlow', function() {
      mentionBot.enableCachingForDebugging = true;
      var prs = [3238];

      var owners = mentionBot.guessOwnersForPullRequest(
        'https://github.com/facebook/react-native',
        i,
        'mention-bot',
        'master',
        {} //config
      ).then(function() {
        prs.forEach(function(i) {
          console.log(i, owners);
        });
      });
    });
  });

  describe('CompleteFlow', function() {

    const reactNativePR = {
      repoName: 'https://github.com/facebook/react-native',
      prNumber: 17759,
      prUser: 'mention-bot',
      prBaseBranch: 'master',
      privateRepo: false,
      org: 'facebook'
    }

    pit('Gets correct users with default config options', function() {
      mentionBot.enableCachingForDebugging = true;
      return mentionBot.guessOwnersForPullRequest(
        reactNativePR.repoName,
        reactNativePR.prNumber,
        reactNativePR.prUser,
        reactNativePR.prBaseBranch,
        reactNativePR.privateRepo,
        reactNativePR.org,
        {
          maxReviewers: 3,
          userBlacklist: [],
          fileBlacklist: [],
          requiredOrgs: [],
          numFilesToCheck: 5,
          findPotentialReviewers: true,
        },
        github
      ).then(function(owners) {
        expect(owners).toEqual(['motiz88', 'cosmith', 'sahrens']);
      });
    });

    pit('Filters out users that are not in the org if the repo is private', function() {
      mentionBot.enableCachingForDebugging = true;
      var githubMock = {
        orgs: {
          getMembers: jest.genMockFunction().mockImplementation(function(params, cb) {
            cb(null, [
              {login: 'sahrens'},
              {login: 'not-vjeux'},
              {login: 'cosmith'}
            ]);
          })
        }
      };

      return mentionBot.guessOwnersForPullRequest(
        reactNativePR.repoName,
        reactNativePR.prNumber,
        reactNativePR.prUser,
        reactNativePR.prBaseBranch,
        true, //Set privateRepo to true
        reactNativePR.org,
        {
          maxReviewers: 3,
          userBlacklist: [],
          fileBlacklist: [],
          requiredOrgs: [],
          numFilesToCheck: 5,
          findPotentialReviewers: true,
        },
        githubMock
      ).then(function(owners) {
        expect(githubMock.orgs.getMembers.mock.calls.length).toBe(1);
        expect(githubMock.orgs.getMembers.mock.calls[0][0]).toEqual({
          org: 'facebook',
          page: 0,
          per_page: 100
        });
        expect(owners).toEqual(['cosmith', 'sahrens']);
      });
    });

    pit('Handles pagination when getting the org members', function() {
      mentionBot.enableCachingForDebugging = true;
      var onCall = 0;

      //First call to the github api returns 100 results
      var onCall1 = [{login: 'sahrens'}];
      var i = 0;
      for (i; i < 99; i++) {
        onCall1.push({login: 'someone-else'});
      }

      //Second call to the github api returns 2 results
      var onCall2 = [
        {login: 'vjeux'},
        {login: 'cosmith'}
      ];

      var githubMock = {
        orgs: {
          getMembers: jest.genMockFunction().mockImplementation(function(params, cb) {
            if(++onCall === 1) {
              cb(null, onCall1);
            } else {
              cb(null, onCall2);
            }
          })
        }
      };

      return mentionBot.guessOwnersForPullRequest(
        reactNativePR.repoName,
        reactNativePR.prNumber,
        reactNativePR.prUser,
        reactNativePR.prBaseBranch,
        true, //Set privateRepo to true
        reactNativePR.org,
        {
          maxReviewers: 3,
          userBlacklist: [],
          fileBlacklist: [],
          requiredOrgs: [],
          numFilesToCheck: 5,
          findPotentialReviewers: true,
        },
        githubMock
      ).then(function(owners) {
        expect(githubMock.orgs.getMembers.mock.calls.length).toBe(2);
        expect(githubMock.orgs.getMembers.mock.calls[0][0]).toEqual({
          org: 'facebook',
          page: 0,
          per_page: 100
        });
        expect(githubMock.orgs.getMembers.mock.calls[1][0]).toEqual({
          org: 'facebook',
          page: 1,
          per_page: 100
        });
        expect(owners).toEqual(['cosmith', 'sahrens', 'vjeux']);
      });
    });

    pit('Does not get the org members if there is no org', function() {
      mentionBot.enableCachingForDebugging = true;
      var githubMock = {
        orgs: {
          getMembers: jest.genMockFunction()
        }
      };

      return mentionBot.guessOwnersForPullRequest(
        reactNativePR.repoName,
        reactNativePR.prNumber,
        reactNativePR.prUser,
        reactNativePR.prBaseBranch,
        true, //Set privateRepo to true
        undefined,
        {
          maxReviewers: 3,
          userBlacklist: [],
          fileBlacklist: [],
          requiredOrgs: [],
          numFilesToCheck: 5,
          findPotentialReviewers: true,
        },
        githubMock
      ).then(function(owners) {
        expect(githubMock.orgs.getMembers.mock.calls.length).toBe(0);
        expect(owners).toEqual(['motiz88', 'cosmith', 'sahrens']);
      });
    });

    pit('Gets correct users if `findPotentialReviewers` option is disabled', function() {
        mentionBot.enableCachingForDebugging = true;
        return mentionBot.guessOwnersForPullRequest(
          reactNativePR.repoName,
          reactNativePR.prNumber,
          reactNativePR.prUser,
          reactNativePR.prBaseBranch,
          true, //Set private repo to true
          reactNativePR.org,
          {
            maxReviewers: 3,
            userBlacklist: [],
            fileBlacklist: [],
            requiredOrgs: [],
            numFilesToCheck: 5,
            findPotentialReviewers: false,
            alwaysNotifyForPaths: [{
              name: 'jcsmorais',
              files: ['Libraries/Image/*']
            }]
          },
          github
        ).then(function(owners) {
          expect(owners).toEqual(['jcsmorais']);
        });
      });

    pit('Ignores PRs made against files owned by a team you are a member of if `skipTeamPrs` is set', function() {
      mentionBot.enableCachingForDebugging = true;
      var githubMock = {
        orgs: {
          getTeams: jest.genMockFunction().mockImplementation(function(params, cb) {
            cb(null, [{slug: 'myteam', id: 1}]);
          }),
          getTeamMembership: jest.genMockFunction().mockImplementation(function(params, cb) {
            cb(null, {state: 'active'});
          })
        }
      };
      return mentionBot.guessOwnersForPullRequest(
        reactNativePR.repoName,
        reactNativePR.prNumber,
        reactNativePR.prUser,
        reactNativePR.prBaseBranch,
        true, //Set private repo to true
        reactNativePR.org,
        {
          maxReviewers: 3,
          userBlacklist: [],
          fileBlacklist: [],
          requiredOrgs: [],
          numFilesToCheck: 5,
          findPotentialReviewers: false,
          alwaysNotifyForPaths: [{
            name: 'facebook/myteam',
            files: ['website/server/*'],
            skipTeamPrs: true
          }]
        },
        githubMock
      ).then(function(owners) {
        expect(owners.length).toEqual(0);
      });
    });

    pit('Messages 5 users from config option maxUsersToPing', function() {
      mentionBot.enableCachingForDebugging = true;
      return mentionBot.guessOwnersForPullRequest(
        reactNativePR.repoName,
        reactNativePR.prNumber,
        reactNativePR.prUser,
        reactNativePR.prBaseBranch,
        reactNativePR.privateRepo,
        reactNativePR.org,
        {
          maxReviewers: 5,
          userBlacklist: [],
          fileBlacklist: [],
          requiredOrgs: [],
          numFilesToCheck: 5,
          findPotentialReviewers: true,
        },
        github
      ).then(function(owners) {
        expect(owners.length).toEqual(5);
      });
    });

    pit('Should contain testname in owners from whitelist', function() {
      mentionBot.enableCachingForDebugging = true;
      return mentionBot.guessOwnersForPullRequest(
        reactNativePR.repoName,
        reactNativePR.prNumber,
        reactNativePR.prUser,
        reactNativePR.prBaseBranch,
        reactNativePR.privateRepo,
        reactNativePR.org,
        {
          maxReviewers: 3,
          userBlacklist: [],
          fileBlacklist: [],
          requiredOrgs: [],
          numFilesToCheck: 5,
          findPotentialReviewers: true,
          alwaysNotifyForPaths: [
            {
              name: 'ghuser',
              files: ['package.json', '**/*.js', 'README.md']
            }
          ]
        },
        github
      ).then(function(owners) {
        expect(owners.indexOf('ghuser')).toBeGreaterThan(-1);
      });
    });

    const botTestingPR = {
      repoName: 'https://github.com/fbsamples/bot-testing',
      prNumber: 95,
      prUser: 'mention-bot',
      prBaseBranch: 'master',
      privateRepo: false,
      org: 'facebook'
    }

    pit('Should contain testname in owners from fallback', function() {
      mentionBot.enableCachingForDebugging = true;
      return mentionBot.guessOwnersForPullRequest(
        botTestingPR.repoName,
        botTestingPR.prNumber,
        botTestingPR.prUser,
        botTestingPR.prBaseBranch,
        botTestingPR.privateRepo,
        botTestingPR.org,
        {
          maxReviewers: 3,
          userBlacklist: [],
          fileBlacklist: [],
          requiredOrgs: [],
          numFilesToCheck: 5,
          findPotentialReviewers: true,
          fallbackNotifyForPaths: [
            {
              name: 'ghuser',
              files: ['*.js']
            }
          ]
        },
        github
      ).then(function(owners) {
        expect(owners.indexOf('ghuser')).toBeGreaterThan(-1);
      });
    });

    pit('Should not contain testname in owners from fallback when fallback is missing', function() {
      mentionBot.enableCachingForDebugging = true;
      return mentionBot.guessOwnersForPullRequest(
        botTestingPR.repoName,
        botTestingPR.prNumber,
        botTestingPR.prUser,
        botTestingPR.prBaseBranch,
        botTestingPR.privateRepo,
        botTestingPR.org,
        {
          maxReviewers: 3,
          userBlacklist: [],
          fileBlacklist: [],
          requiredOrgs: [],
          numFilesToCheck: 5,
          findPotentialReviewers: true
        },
        github
      ).then(function (owners) {
        expect(owners.indexOf('ghuser')).toEqual(-1);
      });
    });
  });

  it('ParseDiffEmpty', function() {
    expect(function() { mentionBot.parseDiff(''); }).not.toThrow();
  });

  it('ParseBlameEmpty', function() {
    expect(function() { mentionBot.parseBlame(''); }).not.toThrow();
  });

  it('ParsePR229', function() {
    var parsed = mentionBot.parseDiff(
      getFile('pr229.diff')
    );
    expect(parsed).toEqual([
      {
        path: 'public/tagging_templates/some_binary.xlsx',
        deletedLines: []
      },
      {
        path: 'public/tagging_templates/other_binary.xlsx',
        deletedLines: []
      },
      {
        path: 'public/tagging_templates/different_binary.xlsx',
        deletedLines: []
      },
      {
        path: 'spec/fixtures/some_binary.xlsx',
        deletedLines: []
      }
    ]);
  });

  it('ParseDiff3119', function() {
    var parsed = mentionBot.parseDiff(
      // https://github.com/facebook/react-native/pull/3119.diff
      getFile('3119.diff')
    );
    expect(parsed).toEqual([
      {
        path: 'Libraries/Components/MapView/MapView.js',
        deletedLines: [ 74 ],
      },
      {
        path: 'React/Views/RCTMap.m',
        deletedLines: [ 90, 92 ],
      },
      {
        path: 'React/Views/RCTMapManager.m',
        deletedLines: [ ],
      },
    ]);
  });

  it('ParseDiff35fa5', function() {
    var parsed = mentionBot.parseDiff(
      // https://github.com/facebook/react-native/commit/35fa5aa76233b3fbe541f3fa1756705900ee919c.diff
      getFile('35fa5aa76233b3fbe541f3fa1756705900ee919c.diff')
    );
    expect(parsed).toEqual([
      {
        path: 'website/src/react-native/img/TutorialFinal.png',
        deletedLines: [ ],
      },
      {
        path: 'website/src/react-native/img/TutorialMock.png',
        deletedLines: [ ],
      },
      {
        path: 'website/src/react-native/img/TutorialSingleFetched.png',
        deletedLines: [ ],
      },
      {
        path: 'website/src/react-native/img/TutorialStyledMock.png',
        deletedLines: [ ],
      },
      {
        path: 'website/src/react-native/img/chrome_breakpoint.png',
        deletedLines: [ ],
      },
      {
        path: 'website/src/react-native/img/favicon.png',
        deletedLines: [ ],
      },
      {
        path: 'website/src/react-native/img/header_logo.png',
        deletedLines: [ ],
      },
      {
        path: 'website/src/react-native/img/opengraph.png',
        deletedLines: [ ],
      },
    ]);
  });

  it('ParseDiff3229', function() {
    var parsed = mentionBot.parseDiff(
      // https://github.com/facebook/react-native/pull/3229.diff
      getFile('3229.diff')
    );
    expect(parsed).toEqual([
      {
        path: 'Libraries/WebSocket/WebSocket.ios.js',
        deletedLines: [ 19, 20, 21, 22, 23, 24, 25, 27, 28, 70, 74, 75, 77, 79, 83, 88, 89, 91, 95, 100, 101, 105, 109, 113, 114, 115, 116, 119 ],
      },
      {
        path: 'Libraries/WebSocket/WebSocketBase.js',
        deletedLines: [ 19, 25, 26, 27, 28, 29 ],
      },
      {
        path: 'Libraries/WebSocket/__mocks__/event-target-shim.js',
        deletedLines: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
      },
      {
        path: 'Libraries/WebSocket/__tests__/Websocket-test.js',
        deletedLines: [ ],
      },
    ]);
  });

  it('ParseDiff1', function() {
    var parsed = mentionBot.parseDiff(
      // https://github.com/fbsamples/bot-testing/pull/1.diff
      getFile('1.diff')
    );
    expect(parsed).toEqual([
      {
        path: 'README.md',
        deletedLines: [  ],
      },
    ]);
  });

  it('ParseBlame1', function() {
    var parsed = mentionBot.parseBlame(
      // https://github.com/facebook/react-native/blame/master/Libraries/Components/WebView/WebView.ios.js
      getFile('WebView.ios.js.blame')
    );

    expect(parsed).toEqual([
      "nicklockwood",
      "vjeux",
      "vjeux",
      "vjeux",
      "vjeux",
      "vjeux",
      "vjeux",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "janicduplessis",
      "nicklockwood",
      "nicklockwood",
      "facebook-github-bot",
      "yungsters",
      "nicklockwood",
      "donyu",
      "nicklockwood",
      "nicklockwood",
      "facebook-github-bot",
      "facebook-github-bot",
      "nicklockwood",
      "nicklockwood",
      "davidaurelio",
      "davidaurelio",
      "nicklockwood",
      "sahrens",
      "nicklockwood",
      "nicklockwood",
      "sahrens",
      "nicklockwood",
      "donyu",
      "sahrens",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "bhosmer",
      "davidaurelio",
      "davidaurelio",
      "davidaurelio",
      "bhosmer",
      "bhosmer",
      "bhosmer",
      "bhosmer",
      "bhosmer",
      "bhosmer",
      "bhosmer",
      "bhosmer",
      "bhosmer",
      "bhosmer",
      "bhosmer",
      "bhosmer",
      "bhosmer",
      "donyu",
      "donyu",
      "janicduplessis",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "mkonicek",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "mkonicek",
      "sophiebits",
      "sophiebits",
      "sophiebits",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "nicklockwood",
      "sophiebits",
      "facebook-github-bot",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "caabernathy",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "mkonicek",
      "mkonicek",
      "mkonicek",
      "donyu",
      "mkonicek",
      "mkonicek",
      "mkonicek",
      "mkonicek",
      "mkonicek",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "mkonicek",
      "caabernathy",
      "caabernathy",
      "mkonicek",
      "mkonicek",
      "lwansbrough",
      "aflanagan",
      "aflanagan",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "nicklockwood",
      "caabernathy",
      "aflanagan",
      "aflanagan",
      "aflanagan",
      "mkonicek",
      "caabernathy",
      "caabernathy",
      "mkonicek",
      "mkonicek",
      "lwansbrough",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "nicklockwood",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "facebook-github-bot",
      "caabernathy",
      "nicklockwood",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "nicklockwood",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "facebook-github-bot",
      "Crash--",
      "Crash--",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "kmagiera",
      "caabernathy",
      "caabernathy",
      "Crash--",
      "kmagiera",
      "odino",
      "Crash--",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "odino",
      "caabernathy",
      "caabernathy",
      "odino",
      "odino",
      "odino",
      "odino",
      "odino",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "chiraggshah",
      "caabernathy",
      "chiraggshah",
      "chiraggshah",
      "chiraggshah",
      "chiraggshah",
      "alvaromb",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "alvaromb",
      "alvaromb",
      "javache",
      "javache",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "Crash--",
      "javache",
      "javache",
      "Crash--",
      "Crash--",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "Crash--",
      "Crash--",
      "Crash--",
      "Thomas101",
      "Thomas101",
      "caabernathy",
      "ios122",
      "Thomas101",
      "Thomas101",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "sophiebits",
      "nicklockwood",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "sophiebits",
      "sophiebits",
      "sophiebits",
      "sophiebits",
      "sophiebits",
      "nicklockwood",
      "sophiebits",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "sophiebits",
      "nicklockwood",
      "sophiebits",
      "nicklockwood",
      "nicklockwood",
      "donyu",
      "donyu",
      "nicklockwood",
      "nicklockwood",
      "bhosmer",
      "bhosmer",
      "bhosmer",
      "bhosmer",
      "donyu",
      "nicklockwood",
      "nicklockwood",
      "donyu",
      "donyu",
      "nicklockwood",
      "donyu",
      "donyu",
      "donyu",
      "nicklockwood",
      "nicklockwood",
      "lwansbrough",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "javache",
      "javache",
      "javache",
      "facebook-github-bot",
      "javache",
      "javache",
      "aflanagan",
      "aflanagan",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "jacobp100",
      "jacobp100",
      "facebook-github-bot",
      "facebook-github-bot",
      "nicklockwood",
      "facebook-github-bot",
      "sahrens",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "lwansbrough",
      "lwansbrough",
      "aflanagan",
      "nicklockwood",
      "nicklockwood",
      "janicduplessis",
      "janicduplessis",
      "janicduplessis",
      "jacobp100",
      "jacobp100",
      "javache",
      "alvaromb",
      "Crash--",
      "Thomas101",
      "Thomas101",
      "facebook-github-bot",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "sophiebits",
      "nicklockwood",
      "janicduplessis",
      "caabernathy",
      "janicduplessis",
      "sophiebits",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "sophiebits",
      "nicklockwood",
      "janicduplessis",
      "caabernathy",
      "janicduplessis",
      "sophiebits",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "sophiebits",
      "nicklockwood",
      "janicduplessis",
      "janicduplessis",
      "janicduplessis",
      "sophiebits",
      "stereodenis",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "sophiebits",
      "nicklockwood",
      "caabernathy",
      "caabernathy",
      "caabernathy",
      "sophiebits",
      "sophiebits",
      "sophiebits",
      "sophiebits",
      "sophiebits",
      "sophiebits",
      "sophiebits",
      "sophiebits",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "facebook-github-bot",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "sophiebits",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "sophiebits",
      "nicklockwood",
      "janicduplessis",
      "caabernathy",
      "janicduplessis",
      "sophiebits",
      "sebmarkbage",
      "sophiebits",
      "nicklockwood",
      "sophiebits",
      "sophiebits",
      "sophiebits",
      "janicduplessis",
      "sophiebits",
      "nicklockwood",
      "sophiebits",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "sophiebits",
      "nicklockwood",
      "sophiebits",
      "sophiebits",
      "sophiebits",
      "sophiebits",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "janicduplessis",
      "sophiebits",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "jacobp100",
      "sophiebits",
      "nicklockwood",
      "facebook-github-bot",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "donyu",
      "nicklockwood",
      "donyu",
      "lwansbrough",
      "lwansbrough",
      "lwansbrough",
      "nicklockwood",
      "nicklockwood",
      "nicklockwood"
    ]);
  });
});
