const db = require('mongoose');
require('dotenv').config();

const connectionString = process.env.MONGO_DB_URI;

db.Promise = global.Promise; //la idea crec que es que quan es faci servir una promesa que fasi servir el db.connect

async function connect() {
  await db.connect(
    connectionString /* li estem dient que utilitzi les noves actualitzacins, i evitar warnings */,
    {
      useNewUrlParser: true,
    },
  );
  console.log('[MongoDB] Connected');
}

module.exports = connect;
