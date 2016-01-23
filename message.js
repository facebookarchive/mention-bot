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

module.exports = function(
  reviewers: Array<string>,
  mentionSentenceBuilder: (reviewers: Array<string>) => string,
  defaultMessageGenerator: (reviewers: Array<string>) => string
): string {

  // This file is a place where you can change the way the message the bot
  // uses to comment. For example:
  //
  //   return 'Please review this ' + mentionSentenceBuilder(reviewers);
  //
  // will print
  //
  //   Please review this @georgecodes and @vjeux

	return 'By analyzing the changes on this pull request, we identified ' + mentionSentenceBuilder(reviewers) + ' to be potential reviewers';
};
