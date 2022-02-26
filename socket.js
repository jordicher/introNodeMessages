//inicializar el socket.io
//generar una instancia y poderla compartir

const socketIO = require('socket.io');

const socket = {}; // un objecte per guardarlo com a referencia

function connect(server) {
  socket.io = socketIO(server);
}

module.exports = {
  connect,
  socket,
};
