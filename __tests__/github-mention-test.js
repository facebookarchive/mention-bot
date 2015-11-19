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
  .dontMock('fs');

var mentionBot = require('../mention-bot.js');
var fs = require('fs');

describe('Github Mention', function() {
  // If you are working on the algorithm itself, it is useful to be able to run
  // the complete flow that downloads the diff and subsequent blames. Since
  // doing http requests is unreliable in tests, it is disabled by default.
  xit('CompleteFlow', function() {
    mentionBot.enableCachingForDebugging = true;
    var prs = [3238];
    prs.forEach(function(i) {
      console.log(
        i,
        mentionBot.guessOwnersForPullRequest(
          'https://github.com/facebook/react-native',
          i
        )
      );
    });
  });

  function getFile(filename) {
    return fs.readFileSync(__dirname + '/data/' + filename, 'utf8');
  }

  it('ParseDiffEmpty', function() {
    expect(function() { mentionBot.parseDiff(''); }).not.toThrow();
  });

  it('ParseBlameEmpty', function() {
    expect(function() { mentionBot.parseBlame(''); }).not.toThrow();
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
      // https://github.com/facebook/react-native/blame/master/Libraries/Components/MapView/MapView.js
      getFile('MapView.js.blame')
    );

    expect(parsed).toEqual([
      'tadeuzagallo',
      'vjeux', 'vjeux', 'vjeux', 'vjeux', 'vjeux', 'vjeux',
      'tadeuzagallo', 'tadeuzagallo',
      'bhosmer',
      'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo',
      'sahrens',
      'tadeuzagallo',
      'kmagiera',
      'tadeuzagallo', 'tadeuzagallo',
      'kmagiera',
      'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo',
      'sahrens',
      'tadeuzagallo',
      'bhosmer',
      'philikon', 'philikon', 'philikon', 'philikon', 'philikon', 'philikon',
      'bhosmer',
      'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo',
      'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn',
      'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo',
      'ultralame',
      'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo',
      'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn',
      'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo',
      'ginamdar', 'ginamdar', 'ginamdar', 'ginamdar', 'ginamdar', 'ginamdar', 'ginamdar', 'ginamdar', 'ginamdar', 'ginamdar',
      'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn',
      'ginamdar', 'ginamdar', 'ginamdar', 'ginamdar',
      'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn',
      'ginamdar', 'ginamdar', 'ginamdar',
      'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo',
      'dvcrn', 'dvcrn',
      'ultralame',
      'dvcrn', 'dvcrn',
      'tadeuzagallo', 'tadeuzagallo',
      'bhosmer',
      'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo',
      'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn', 'dvcrn',
      'tadeuzagallo',
      'dvcrn',
      'tadeuzagallo', 'tadeuzagallo', 'tadeuzagallo',
      'sahrens',
      'kmagiera',
      'sahrens',
      'kmagiera',
      'fkgozali',
      'sahrens', 'sahrens', 'sahrens', 'sahrens', 'sahrens', 'sahrens', 'sahrens', 'sahrens', 'sahrens', 'sahrens', 'sahrens', 'sahrens', 'sahrens', 'sahrens', 'sahrens',
      'nicklockwood', 'nicklockwood', 'nicklockwood',
      'sahrens',
      'tadeuzagallo', 'tadeuzagallo',
    ]);
  });
});
