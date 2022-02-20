const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
  controller
    .getMessages()
    .then((messageList) => response.success(req, res, messageList, 200))
    .catch((err) =>
      response.error(req, res, 'Error en el controlador', 500, err),
    );
});

router.post('/', async (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then(() => response.success(req, res, 'Created', 201))
    .catch((err) =>
      response.error(req, res, 'Error en el controlador', 500, err),
    );
});

//podem possar el status

module.exports = router; //exportem el router, les dos rutes
