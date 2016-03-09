var exports = module.exports = {};

var packageConfig = require('./package.json').config;
var configJson = require('./config.json');

var mergedConfig = Object.assign(packageConfig, configJson);

exports.github = {
    host: mergedConfig.gheHost || 'github.com',
    apiHost: mergedConfig.gheHost || 'api.github.com',
    protocol: mergedConfig.gheProtocol || 'https',
    pathPrefix: mergedConfig.ghePathPrefix,
    port: mergedConfig.ghePort || 443
};
