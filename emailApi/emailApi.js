const express = require('express');
var router = express.Router();
const email = require('./email');

router.get('/',function(req,res){
 res.json({'url':'default get call in emailApi.js'});
});

router.post('/page',function(req,res){
	var from = 'jitendrasbunde@gmail.com';
	var to = 'sunil.sonawane@joshsoftware.com,jitendrasbunde@gmail.com';
	var sub = 'Email API test';
	var text = 'Node Mail API Testing mail By Jitendra';
 email.mailSend(from,to,sub,text);
 res.json({'url':'post  call in emailApi.js'});
});
module.exports = router; 