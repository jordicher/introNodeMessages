const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
  const filterUsers = req.query.name || null;
  controller
    .getUsers(filterUsers)
    .then((userList) => response.success(req, res, userList, 200))
    .catch((err) =>
      response.error(req, res, 'Error en el controlador', 500, err),
    );
});

router.post('/', async (req, res) => {
  controller
    .addUser(req.body.name)
    .then((data) => response.success(req, res, data, 201))
    .catch((err) =>
      response.error(req, res, 'Error en el controlador', 500, err),
    );
});

module.exports = router;
