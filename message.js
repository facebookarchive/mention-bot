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

/*
  This now takes a `documentToAttach` argument, that is a string. If one is present, it attaches it
  to the message to post. If one is not present, it just returns the default reveiwer message.
*/

'use strict';

module.exports = function(
  personsToMention: Array<string>,
  mentionSentenceBuilder: (personsToMention: Array<string>) => string,
  defaultMessageGenerator: (personsToMention: Array<string>) => string,
  documentToAttach
): string {

  // This file is a place where you can change the way the message the bot
  // uses to comment. For example:
  //
  //   return 'Please review this ' + mentionSentenceBuilder(personsToMention);
  //
  // will print
  //
  //   Please review this @georgecodes and @vjeux

  if(documentToAttach) {
      return (
`Attention: ${mentionSentenceBuilder(personsToMention)}

${documentToAttach})`
      )
    }
  else {
    return defaultMessageGenerator(personsToMention);
  }
};
