const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
  const filterMessages = req.query.user || null;
  controller
    .getMessages(filterMessages)
    .then((messageList) => response.success(req, res, messageList, 200))
    .catch((err) =>
      response.error(req, res, 'Error en el controlador', 500, err),
    );
});

router.post('/', async (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => response.success(req, res, fullMessage, 201))
    .catch((err) =>
      response.error(req, res, 'Error en el controlador', 500, err),
    );
});

router.patch('/:id', async (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => response.success(req, res, data, 200))
    .catch((err) =>
      response.error(req, res, 'Error en el controlador', 500, err),
    );
});

//podem possar el status

module.exports = router; //exportem el router, les dos rutes
