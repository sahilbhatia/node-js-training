const express = require('express');
const router = express.Router();
const user = require('../controller/controller.js');
const token = require('../tokenValidation/tokenValidation.js');
const { check } = require('express-validator');

router.post('/user',[
        check('email').isEmail(),
        check('mobile_no').isLength({ min: 10 },
        )
        ],user.create);
router.get('/users,token.autheticateToken,user.findAll);

 router.get('/user/:email',[
        check('email').isEmail()
        ], token.autheticateToken,user.findOne);

 router.put('/user/:oldemail',[
        check('oldemail').isEmail(),
        check('email').isEmail(),
        check('mobile_no').isLength({ min: 10 },
        )
        ],token.autheticateToken,user.update);

 router.put('/setUser/:oldemail',[
        check('oldemail').isEmail(),
        check('mobile_no').isLength({ min: 10 },
	)
        ],user.setUser);

 router.delete('/user/:email', [
        check('email').isEmail()
        ],token.autheticateToken,user.delete);


  router.post('/login',[
        check('email').isEmail()
        ], user.login);

 router.delete('/user/:email', [
        check('email').isEmail()
        ],token.autheticateToken,user.delete);


 router.get('/getData/:token',user.getData);
module.exports = router;

