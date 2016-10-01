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
  .dontMock('minimatch');

require.requireActual('babel-polyfill');
var mentionBot = require('../mention-bot.js');
var fs = require('fs');

describe('Github Mention', function() {

  describe('CompleteFlow', function() {

    const reactNativePR = {
      repoName: 'react-native',
      repoUser: 'facebook',
      prNumber: 3238,
      prUser: 'mention-bot',
      prBaseBranch: 'master',
      privateRepo: false,
      org: 'facebook'
    }

    const githubMock = {
      pullRequests: {
        getFiles: jest.genMockFunction().mockImplementation(function(params, cb) {
          cb(null, [
            {filename: 'README.md'},
            {filename: 'package.json'},
            {filename: 'config.js'},
            {filename: 'website/server/server.js'},
          ]);
        }),
      },
      repos: {
        getCommits: jest.genMockFunction().mockImplementation(function(params, cb) {
          cb(null, [
            {author: { login: 'corbt' }},
            {author: { login: 'vjeux' }},
            {author: { login: 'sahrens' }},
            {author: { login: 'jcsmorais' }},
            {author: { login: 'ghuser' }},
          ]);
        })
      }
    }

    pit('Gets correct users with default config options', function() {
      return mentionBot.guessOwnersForPullRequest(
        reactNativePR.repoName,
        reactNativePR.repoUser,
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
        githubMock
      ).then(function(owners) {
        expect(owners).toEqual(['corbt', 'vjeux', 'sahrens']);
      });
    });

    pit('Filters out users that are not in the org if the repo is private', function() {
      githubMock['orgs'] = {
        getMembers: jest.genMockFunction().mockImplementation(function(params, cb) {
          cb(null, [
            {login: 'sahrens'},
            {login: 'not-vjeux'},
            {login: 'corbt'}
          ]);
        })
      };

      return mentionBot.guessOwnersForPullRequest(
        reactNativePR.repoName,
        reactNativePR.repoUser,
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
        expect(owners).toEqual(['corbt', 'sahrens']);
      });
    });

    pit('Handles pagination when getting the org members', function() {
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
        {login: 'corbt'}
      ];

      githubMock['orgs'] = {
        getMembers: jest.genMockFunction().mockImplementation(function(params, cb) {
          if(++onCall === 1) {
            cb(null, onCall1);
          } else {
            cb(null, onCall2);
          }
        })
      };

      return mentionBot.guessOwnersForPullRequest(
        reactNativePR.repoName,
        reactNativePR.repoUser,
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
        expect(owners).toEqual(['corbt', 'vjeux', 'sahrens']);
      });
    });

    pit('Does not get the org members if there is no org', function() {
      githubMock['orgs'] = {
        getMembers: jest.genMockFunction()
      };

      return mentionBot.guessOwnersForPullRequest(
        reactNativePR.repoName,
        reactNativePR.repoUser,
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
        expect(owners).toEqual(['corbt', 'vjeux', 'sahrens']);
      });
    });

    pit('Gets correct users if `findPotentialReviewers` option is disabled', function() {
        return mentionBot.guessOwnersForPullRequest(
          reactNativePR.repoName,
          reactNativePR.repoUser,
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
              files: ['website/server/*']
            }]
          },
          githubMock
        ).then(function(owners) {
          expect(owners).toEqual(['jcsmorais']);
        });
      });

    pit('Messages 5 users from config option maxUsersToPing', function() {
      return mentionBot.guessOwnersForPullRequest(
        reactNativePR.repoName,
        reactNativePR.repoUser,
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
        githubMock
      ).then(function(owners) {
        expect(owners.length).toEqual(5);
      });
    });

    pit('Should contain testname in owners from whitelist', function() {
      return mentionBot.guessOwnersForPullRequest(
        reactNativePR.repoName,
        reactNativePR.repoUser,
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
        githubMock
      ).then(function(owners) {
        expect(owners.indexOf('ghuser')).toBeGreaterThan(-1);
      });
    });

    const botTestingPR = {
      repoName: 'bot-testing',
      repoUser: 'fbsamples',
      prNumber: 95,
      prUser: 'mention-bot',
      prBaseBranch: 'master',
      privateRepo: false,
      org: 'facebook'
    }

    pit('Should contain testname in owners from fallback', function() {
      githubMock['repos'] = {
        getCommits: jest.genMockFunction().mockImplementation(function(params, cb) {
          cb(null, []);
        })
      }
      return mentionBot.guessOwnersForPullRequest(
        botTestingPR.repoName,
        botTestingPR.repoUser,
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
        githubMock
      ).then(function(owners) {
        expect(owners.indexOf('ghuser')).toBeGreaterThan(-1);
      });
    });

    pit('Should not contain testname in owners from fallback when fallback is missing', function() {
      return mentionBot.guessOwnersForPullRequest(
        botTestingPR.repoName,
        botTestingPR.repoUser,
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
        githubMock
      ).then(function (owners) {
        expect(owners.indexOf('ghuser')).toEqual(-1);
      });
    });
  });
});
