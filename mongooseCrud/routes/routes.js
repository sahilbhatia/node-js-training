  const express = require('express');
  const router = express.Router();
  const bodyParser = require('body-parser');
  router.use(bodyParser.json());
  const { body, validationResult } = require('express-validator')

  const jwt=require('jsonwebtoken');
const secretkey="jitu";
//verify the token
const verifyUserToken=(req,res,next)=>{
  try{
    var token = req.headers.authorization.split(' ')[1];
  }catch(ex){
      res.send(422)
  }
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
    }else
    res.send(403);
}

  const user = require('../controllers/controller');

  router.put('/set/:email',[body('email').isEmail().normalizeEmail(),
            body('password').isLength({ min: 5,max: 10}).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)],user.set);

  router.post('/login',[body('email').isEmail(),
            body('password').isLength({ min: 5,max: 10}).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)],user.findOne);

  router.get('/users',verifyUserToken,user.findAll);

  router.post('/user',verifyUserToken,user.create);

  router.delete('/delete/:email',verifyUserToken,user.delete)

  router.put('/user/:email',verifyUserToken,user.update)

  

module.exports = router;


