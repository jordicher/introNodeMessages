const user = require('../components/user/network');
const message = require('../components/message/network');
const chat = require('../components/chat/network');

const routes = function (server) {
  server.use('/message', message);
  server.use('/user', user);
  server.use('/chat', chat);
};

module.exports = routes;
