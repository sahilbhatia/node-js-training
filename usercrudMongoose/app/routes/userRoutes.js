const express = require('express');
const checkValid = require('../validator/validation');
const router = express.Router();
const controller = require('../controller/controller');
const authentication = require('../Authentication/authenticate');
router.post('/user', checkValid.validate(checkValid.userValidation),authentication.verification,authentication.checkToken, controller.create);
router.get('/users', authentication.verification, authentication.checkToken, controller.findAll);
router.get('/user/:email', authentication.verification, authentication.checkToken, controller.findOne);
router.put('/user/:email',checkValid.validate(checkValid.updateValidation), authentication.verification, authentication.checkToken,  controller.update);
router.delete('/user/:email', authentication.verification, authentication.checkToken, controller.deleteByEmail);
router.put('/user/setpassword/:email',checkValid.validate(checkValid.setPasswordValidation),authentication.verification, authentication.checkToken, controller.setPassword);
router.post('/login', controller.login, authentication.jwtAuth);//The whole json obtained here is passsed as the body of the authentication route

module.exports = router;