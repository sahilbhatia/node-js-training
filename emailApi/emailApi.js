const express = require('express');
const router = express.Router();
const email = require('./email');

router.get('/',function(req,res){
	res.json({'url':'default get call in emailApi.js'});
});

router.post('/send',function(req,res){
	var obj = {
		from :'jitendrasbunde@gmail.com',
		to :'sunil.sonawane@joshsoftware.com,jitendrasbunde@gmail.com',
		subject  :'Email API test',
	 	text :'Node Mail API Testing mail By Jitendra'
  }
 email.mailSend(obj);
 		res.json({'url':'post  call in emailApi.js'});
 }
 );
module.exports = router;
