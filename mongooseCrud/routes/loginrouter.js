const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const { body, validationResult } = require('express-validator')
const user = require('/home/jitendra/Node-Js_Training/git_training/node-js-training/mongooseCrud/controllers/controller.js');

const jwt=require('jsonwebtoken');
const secretkey="jitu";
//verify the token
const verifyUserToken=(req,res,next)=>{
    var token = req.headers.authorization.split(' ')[1];
    if(token){
        console.log(token)
        jwt.verify(token,secretkey,(err,data)=>{
            if(err){
              console.log(err);
            }
            else{
                console.log(data);
                next();
            }
        })
        jwt.decode(token,secretkey,(err,data)=>{
            if(err){
              console.log(err);
            }
            else{
                console.log(data);
                next();
            }
        });
    }else
    res.send(403);
}
router.get('/',verifyUserToken,user.findAll)

router.put('/set',[body('email').isEmail().normalizeEmail(),
            body('password').isLength({ min: 5,max: 10}).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)],user.set);

router.post('/login',[body('username').isEmail(),
            body('password').isLength({ min: 5,max: 10}).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)],user.findOne);

module.exports = router;

