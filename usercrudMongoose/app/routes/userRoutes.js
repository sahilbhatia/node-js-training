const express = require('express');
const checkValid = require('../validator/validation');
const router = express.Router();
const controller = require('../controller/controller');
router.post('/user', checkValid.validate(checkValid.userValidation), controller.create);
router.get('/user', controller.findAll);
router.get('/user/:email', controller.findOne);
router.put('/user/:email', checkValid.validate(checkValid.updateValidation), controller.update);
router.delete('/user/:email', controller.deleteByEmail);
router.put('/user/setPass/:email',controller.setPassword);
router.post('/user/login',controller.login);
router.use(function (err, req, res, next) {
  if (err) {
    console.log(err);
  }
  return res.status(500).json(err)
});
module.exports = router;