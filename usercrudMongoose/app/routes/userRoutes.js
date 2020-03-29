const express = require('express');
const checkValid = require('../validator/validation');
const router = express.Router();
const controller = require('../controller/controller');
const authentication = require('../Authentication/auth');
router.post('/user', checkValid.validate(checkValid.userValidation), controller.create);
router.get('/user', authentication.verification, authentication.checkToken, controller.findAll);
router.get('/user/:email', authentication.verification, authentication.checkToken, controller.findOne);
router.put('/user/:email', authentication.verification, authentication.checkToken, checkValid.validate(checkValid.updateValidation), controller.update);
router.delete('/user/:email', authentication.verification, authentication.checkToken, controller.deleteByEmail);
router.put('/user/setPass/:email', controller.setPassword);
router.post('/user/login', controller.login, authentication.jwtAuth);//The whole json obtained here is passsed as the body of the authentication route
router.use(function (err, req, res, next) {
  if (err) {
    console.log(err);
  }
  return res.status(500).json(err)
});
module.exports = router;