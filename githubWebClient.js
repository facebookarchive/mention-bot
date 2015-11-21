'use strict';
var USERNAME = process.env.GITHUB_USER;
var PASSWORD = process.env.GITHUB_PASSWORD;
var cheerio = require('cheerio');
var childProcess = require('child_process');
var CookieJar = require('./cookieJar');
var jar = new CookieJar();

/**
 * Scrape github login page
 * @return {Object} Object containeing two keys: headers (a string) and body (also a string)
 */
var githubLogin = function() {
  var output = childProcess.execSync('curl -v -L https://github.com/login 2>&1').toString().split('<!DOCTYPE html>');
  return {
    headers: output[0],
    body: output[1]    
  };
};


/**
 * gets a CSRF token by hitting github's login form
 * @return {String} CSRF token
 */
var getAuthenticityToken = function() {
  var login = githubLogin();
  jar.parseHeaders(login.headers);
  return encodeURIComponent(cheerio.load(login.body)('[name=authenticity_token]').val());
};

/**
 * runs curl request to perform login action
 * @return {String} github response headers
 */
var getGithubLoginResponseHeaders = function() {
  if(!USERNAME) { return; }
  var authenticity_token = getAuthenticityToken();
  return childProcess.execSync(['curl',
    'https://github.com/session',
    
    '-v',

    '-H',
    '"Pragma: no-cache"',

    '-H',
    '"Origin: https://github.com"',

    '-H',
    '"Accept-Encoding: gzip, deflate"',

    '-H',
    '"Accept-Language: en-US,en;q=0.8"',

    '-H',
    '"Upgrade-Insecure-Requests: 1"',

    '-H',
    '"User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36"',

    '-H',
    '"Content-Type: application/x-www-form-urlencoded"',

    '-H',
    '"Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"',

    '-H',
    '"Cache-Control: no-cache"',

    '-H',
    '"Referer: https://github.com/"',

    '-H',
    '"Cookie: ' + jar.get() + '"',

    '-H',
    '"Connection: keep-alive"',

    '--data',
    '"utf8=%E2%9C%93&authenticity_token=' + authenticity_token + '&login=' + USERNAME + '&password=' + PASSWORD + '"',

    '2>&1'
  ].join(' ')).toString();
};

var headers = getGithubLoginResponseHeaders();

jar.parseHeaders(headers);

if(USERNAME) { module.exports = jar.get(); }
