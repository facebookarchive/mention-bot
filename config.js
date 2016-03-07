var exports = module.exports = {};

var packageConfig = require('./package.json').config;

exports.github = {
    host: packageConfig.gheHost || 'github.com',
    protocol: packageConfig.gheProtocol || 'https',
    pathPrefix: packageConfig.ghePathPrefix,
    port: packageConfig.ghePort || 443
};

