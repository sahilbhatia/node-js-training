const express = require('express');
const router = express.Router();
const file = require('./mongoConn.js');
const bodyParser = require('body-parser');
const mailFile = require('./mailApi.js');

router.use(bodyParser.json());
router.post('/adduser',function(req,res){
	
	mailFile.senderFunction(req.body);

	file.get().collection('user').insertOne(req.body,function(err,res){
		if (err) 
		{
			console.log(err);
		}
		console.log("document inserted go and check mongo database");
	});		
});

module.exports = router;