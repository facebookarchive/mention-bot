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
var USERNAME = process.env.GITHUB_USER;
var PASSWORD = process.env.GITHUB_PASSWORD;
var config = require('./config');
var childProcess = require('child_process');
var CookieJar = require('./cookieJar');
var jar = new CookieJar();

var ghHost = config.github.host
var ghProtocol = config.github.protocol

/**
 * Scrape github login page
 */
var githubLogin = function() {
  var output = childProcess.execSync(
    `curl -v -L ${ghProtocol}://${ghHost}/login 2>&1`,
    {encoding: 'utf8'}
  ).toString().split('<!DOCTYPE html>');

  return {
    headers: output[0],
    body: output[1]
  };
};


/**
 * gets a CSRF token by hitting github's login form
 * returns CSRF token
 */
var getAuthenticityToken = function() {
  var login = githubLogin();
  jar.parseHeaders(login.headers);
  return encodeURIComponent(
    (login.body.match(/name="authenticity_token".*value="([^"]+)"/) || [''])[1]
  );
};

/**
 * runs curl request to perform login action
 * returns github response headers
 */
var getGithubLoginResponseHeaders = function(): string {
  var authenticity_token = getAuthenticityToken();
  var commandArr = [
    `${ghProtocol}://${ghHost}/session`,
    `--silent`,
    `-v`,
    `-d`, `utf8=%E2%9C%93&authenticity_token=${authenticity_token}`,
    `-d`, `login=${USERNAME}`,
    `--data-urlencode`, `password=${PASSWORD}`,
    `-H`, `Pragma: no-cache`,
    `-H`, `Origin: ${ghProtocol}://${ghHost}`,
    `-H`, `Accept-Encoding: gzip, deflate`,
    `-H`, `Accept-Language: en-US,en;q=0.8`,
    `-H`, `Upgrade-Insecure-Requests: 1`,
    `-H`, `User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36`,
    `-H`, `Content-Type: application/x-www-form-urlencoded`,
    `-H`, `Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`,
    `-H`, `Cache-Control: no-cache`,
    `-H`, `Referer: ${ghProtocol}://${ghHost}/`,
    `-H`, `Cookie: ${jar.get()}`,
    `-H`, `Connection: keep-alive`,
  ];

  return childProcess.spawnSync(
    'curl',
    commandArr,
    {encoding: 'utf8'}
  ).stderr.toString();
};

if (USERNAME) {
  var headers = getGithubLoginResponseHeaders();
  jar.parseHeaders(headers);
  if (jar.cookies['logged_in'] === 'no') {
    console.error(`Login to ${USERNAME} failed`);
  }

  module.exports = jar.get();
} else {
  module.exports = null;
}
