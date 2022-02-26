const store = require('./store');

function addUser(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      console.error('[userController] No hay name');
      reject('Los datos son incorrectos');
      return false;
    }

    const fullUser = {
      name,
    };

    store.add(fullUser);
    resolve(fullUser);
  });
}

function getUsers(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.get(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data');
      return false;
    }

    const result = await store.updateText(id, message);

    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid data');
      return false;
    }

    store
      .delete(id)
      .then(() => resolve())
      .catch((e) => reject(e));
  });
}

module.exports = {
  addUser,
  getUsers,
  updateMessage,
  deleteMessage,
};
