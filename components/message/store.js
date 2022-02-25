const db = require('mongoose');
const Model = require('./model');
require('dotenv').config();

const connectionString = process.env.MONGO_DB_URI;

db.Promise = global.Promise; //la idea crec que es que quan es faci servir una promesa que fasi servir el db.connect
db.connect(
  connectionString /* li estem dient que utilitzi les noves actualitzacins, i evitar warnings */,
  {
    useNewUrlParser: true,
  },
);
console.log('[MongoDB] Connected');

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
