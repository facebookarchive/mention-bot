jest.dontMock('../config.js');

describe('config uses defaults from package.json', function() {
    it('uses github defaults'), function() {
	var config = require('../config.js');
	expect(config.gh).toBe({
	    host: 'github.com',
	    port: 443,
	    pathPrefix: null,
	    protocol: 'https'
	});
    },
    it('can be customized for github enterprise in package.json', function() {
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
	    port: 80,
	    pathPrefix: 'api/v3',
	    protocol: 'http'
	});
    });
});
