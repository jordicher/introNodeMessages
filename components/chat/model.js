const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  users: [{ type: Schema.ObjectId, ref: 'User' }],
});

const model = mongoose.model('Chat', mySchema); //seria com el nom de la taula a una taula sql

module.exports = model;
