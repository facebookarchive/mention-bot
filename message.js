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
  pullRequester: string,
  mentionSentenceBuilder: (reviewers: Array<string>) => string,
  defaultMessageGenerator: (reviewers: Array<string>, pullRequester: string) => string
): string {

  // This file is a place where you can change the way the message the bot
  // uses to comment. For example:
  //
  //   return pullRequester + ', thanks!' + mentionSentenceBuilder(reviewers) + 
  //          ', please review this';
  //
  // will print
  //
  //   @hunkim, thanks! @georgecodes and @vjeux, please review this.

	return defaultMessageGenerator(reviewers, pullRequester);
};
