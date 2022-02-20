const store = require('./store');

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] No hay usuario o mensaje');
      reject('Los datos son incorrectos');
      return false;
    }

    const fullMessage = {
      user,
      message,
      date: new Date(),
    };

    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages() {
  return new Promise((resolve, reject) => {
    store.get();
    resolve(store.get());
  });
}

module.exports = {
  addMessage,
  getMessages,
};
