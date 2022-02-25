const Model = require('./model');

function addMessage(message) {
  const newMessage = new Model(message);
  newMessage.save();
}

async function getMessages(filterUser) {
  if (filterUser) {
    return Model.find({ user: new RegExp(filterUser, 'i') }); //regex perque li doni igual minuscules o mayuscules
  }

  const messages = await Model.find();
  return messages;
}

async function updateText(id, message) {
  const updateMessage = await Model.findOneAndUpdate(
    { _id: id },
    { message },
    { new: true }, //retorna el valor actualitzar
  );

  return updateMessage;
}

function deleteMessage(id) {
  const updateMessage = Model.deleteOne({ _id: id });

  return updateMessage;
}

module.exports = {
  add: addMessage,
  get: getMessages,
  updateText: updateText,
  delete: deleteMessage,
};
