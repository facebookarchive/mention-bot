var cookieJarMock = jest.genMockFromModule('../cookieJar.js');
cookieJarMock.mockImplementation(() => { 
  return {
    cookies: {},
    get: () => { return {}; },
    parseHeaders: () => { return {}; }
  };
});

module.exports = cookieJarMock;
