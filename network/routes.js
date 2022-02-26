const user = require('../components/user/network');
const message = require('../components/message/network');

const routes = function (server) {
  server.use('/message', message);
  server.use('/user', user);
};

module.exports = routes;
