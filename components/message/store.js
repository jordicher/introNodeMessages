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

async function getMessages() {
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

module.exports = {
  add: addMessage,
  get: getMessages,
  updateText: updateText,
};
