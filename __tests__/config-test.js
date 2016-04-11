jest.dontMock('../config.js');

describe('config uses defaults from package.json', function() {
  it('uses github defaults'), function() {
    jest.setMock('../config.json', {});
    var config = require('../config.js');
    expect(config.gh).toBe({
      host: 'github.com',
      apiHost: 'api.github.com',
      port: 443,
      pathPrefix: null,
      protocol: 'https'
    });
  }
  it('can be customized for github enterprise in package.json', function() {
    jest.setMock('../config.json', {});
    jest.setMock('../package.json', {
      config: {
        gheHost: 'foo.github.com',
        ghePort: 80,
        gheProtocol: 'http',
        ghePathPrefix: 'api/v3'
      }
    });
    var config = require('../config.js');
    expect(config.github).toEqual({
      host: 'foo.github.com',
      apiHost: 'foo.github.com',
      port: 80,
      pathPrefix: 'api/v3',
      protocol: 'http'
    });
  });
});

describe('config.json can override defaults', function() {
  jest.setMock('../config.json', {
    gheHost: 'bar.github.com',
    ghePort: 8080,
    gheProtocol: 'http2',
    ghePathPrefix: 'api/v4'
  });
  var config = require('../config.js');
  expect(config.github).toEqual({
    host: 'bar.github.com',
    apiHost: 'bar.github.com',
    port: 8080,
    pathPrefix: 'api/v4',
    protocol: 'http2'
  });
});
