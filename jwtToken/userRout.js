const express = require('express');
const router = express.Router();
const user = require('./controller');
const jwt=require('jsonwebtoken');
const secretkey="qwerty";
//verify the token
const verifyToken=(req,res,next)=>{
    const bearer=req.headers["authorization"]
    if(bearer){
        const bearerToken=bearer.split(" ");
        const token=bearerToken[1];
        jwt.verify(token,secretkey,(err,data)=>{
            if(err)
            res.sendStatus(403);
            else{
                console.log(data +"avinash");
                next();
            }

        })
    }else
    res.send(403);
}
router.get('/home',verifyToken, user.home);

 router.put('/logout', user.logout);

 router.post('/login',user.login);
module.exports = router;

