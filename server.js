const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('./socket');
const db = require('./db');
const router = require('./network/routes');
const app = express();
const PORT = 8080;

const server = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //per enviar form encoded, es recomana per defecte extended false

db();
connect(server);
router(app);

//estaticos
app.use('/app', express.static('public')); //public es el nom de la carpeta

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
