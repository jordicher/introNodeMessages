const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //per enviar form encoded, es recomana per defecte extended false

router(app);

//estaticos
app.use('/app', express.static('public')); //public es el nom de la carpeta

app.listen(PORT, () => console.log('Example app listening on port 8080!'));
