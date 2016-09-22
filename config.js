var exports = module.exports = {};

var packageConfig = require('./package.json').config;
var configJson = require('./config.json');

var mergedConfig = Object.assign(packageConfig, configJson);

exports.github = {
  host: process.env.GHE_HOST || mergedConfig.gheHost || 'github.com',
  apiHost: process.env.GHE_API_HOST || mergedConfig.gheHost || 'api.github.com',
  protocol: process.env.GHE_PROTOCOL || mergedConfig.gheProtocol || 'https',
  pathPrefix: process.env.GHE_PATH_PREFIX || mergedConfig.ghePathPrefix,
  port: process.env.GHE_PORT || mergedConfig.ghePort || 443
};
