const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
router.post('/user', controller.create);
router.get('/user', controller.findAll);
router.get('/user/:email', controller.findOne);
router.put('/user/:email', controller.update);
router.delete('/user/:email', controller.deleteByEmail)
module.exports = router;