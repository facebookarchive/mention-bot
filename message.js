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
  pull_requester: string,
  reviewers: Array<string>,
  mentionSentenceBuilder: (reviewers: Array<string>) => string,
  defaultMessageGenerator: (pull_requester: string, reviewers: Array<string>) => string
): string {

  // This file is a place where you can change the way the message the bot
  // uses to comment. For example:
  //
  //   return pull_requester + ', thanks!' + mentionSentenceBuilder(reviewers) + 
  //          ', please review this';
  //
  // will print
  //
  //   @hunkim, thanks! @georgecodes and @vjeux, please review this.

	return defaultMessageGenerator(pull_requester, reviewers);
};
