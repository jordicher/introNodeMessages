const Model = require('./model');

function addUser(user) {
  const newUser = new Model(user);
  newUser.save();
}

async function getUsers(filterUser) {
  if (filterUser) {
    return Model.find({ name: new RegExp(filterUser, 'i') }); //regex perque li doni igual minuscules o mayuscules
  }

  const users = await Model.find();
  return users;
}

async function updateUser(id, name) {
  const updateMessage = await Model.findOneAndUpdate(
    { _id: id },
    { name },
    { new: true }, //retorna el valor actualitzar
  );

  return updateMessage;
}

function deleteUser(id) {
  const updateMessage = Model.deleteOne({ _id: id });

  return updateMessage;
}

module.exports = {
  add: addUser,
  get: getUsers,
  updateUser: updateUser,
  delete: deleteUser,
};
