'use strict';

/**
 * Class for maintaining a cookie jar between http requests
 * @class CookieJar
 */
var CookieJar = function() {
  this.cookies = {};
};

/**
 * Serializes stored cookies into http header format
 * @return {String}
 */
CookieJar.prototype.get = function() {
  return Object.keys(this.cookies)
    .map(function(key) {
      var str = '';
      str += key;
      if(this.cookies[key]) {
        str += '=' + this.cookies[key];
      }
      return str;
    }, this)
    .join('; ');
};

/**
 * Parses a single header line of cookie, parses them, and stores them in a hash
 * @param  {String} h Header line
 */
CookieJar.prototype.parseCookieHeader = function(h) {
  h.split(';')
    .forEach(function(cookie) {
      var pair = cookie.split('=');
      this.cookies[pair[0]] = pair[1];
    }, this);
};

/**
 * Finds Set-Cookie header in resp headers and addes them to the jar
 * @param  {String} headers All HTTP resp headers
 * @return {String} All stored cookies where the new cookies overwrite previous cookies
 */
CookieJar.prototype.parseHeaders = function(headers) {
  if(!headers) { return; }
  headers.split('\n')
    .filter(function(line) {
      return line.split('Set-Cookie').length > 1;
    })
    .forEach(function(line) {
      this.parseCookieHeader(line.split('Set-Cookie: ')[1].trim());
    }, this);
  return this.get();
};

module.exports = CookieJar;