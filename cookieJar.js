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

class CookieJar {
  cookies: { [key: string]: string };

  constructor() {
    this.cookies = {};
  }

  /**
   * Serializes stored cookies into http header format
   */
  get(): string {
    return Object.keys(this.cookies)
      .map(function(key) {
        let str = key;
        if (this.cookies[key]) {
          str += '=' + this.cookies[key];
        }
        return str;
      }, this)
      .join('; ');
  }

  /**
   * Parses a single header line of cookie, parses them, and stores them in a hash
   */
  parseCookieHeader(headerLine: string) {
    headerLine.split(';')
      .forEach(function(cookie) {
        var pair = cookie.split('=');
        this.cookies[pair[0]] = pair[1];
      }, this);
  }

  /**
   * Finds Set-Cookie header in resp headers and adds them to the jar
   * Returns all stored cookies where the new cookies overwrite previous cookies
   */

  parseHeaders(headers: string) {
    if (!headers) {
      return;
    }
    headers.split('\n')
      .filter(function(line) {
        return line.split('Set-Cookie').length > 1;
      })
      .forEach(function(line) {
        this.parseCookieHeader(line.split('Set-Cookie: ')[1].trim());
      }, this);
    return this.get();
  }
}

module.exports = CookieJar;
