const express = require('express');
var router = express.Router();
const email = require('./email');

router.get('/',function(req,res){
 res.json({'url':'default get call in emailApi.js'});
});

router.post('/page',function(req,res){
 email.mailSend();
 res.json({'url':'post  call in emailApi.js'});
});
module.exports = router; 