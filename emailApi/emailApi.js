const express = require('express');
const router = express.Router();
const email = require('./email');

router.get('/',function(req,res){
	res.json({'url':'default get call in emailApi.js'});
});
router.get('/send/:to-:cc-:body',function(req,res){
	var obj = {
		from :'jitendrasbunde@gmail.com',
		to :req.params.to+","+req.params.cc,
		subject  :'Email API test',
	 	text :req.params.boby
  }
    email.mailSend(obj);
 		res.json({'url':'post  call in emailApi.js'});
 }
 );


router.get('/send/',function(req,res){
	var obj = {
		from :'jitendrasbunde@gmail.com',
		to :req.query.to+","+req.query.cc,
		subject  :'Email API test',
	 	text :'Node Mail API Testing mail By Jitendra'
  }
  email.mailSend(obj);
   res.json({'url':'post  call in emailApi.js'});
}
);

module.exports = router;