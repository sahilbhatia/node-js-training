const express = require('express');
const router = express.Router();
const dbConn = require('./mongoConn.js');
const bodyParser = require('body-parser');
const mailFile = require('./mailApi.js');

router.use(bodyParser.json());
router.post('/adduser',function(req,res){
	mailFile.senderFunction(req.body);
	dbConn.get().collection('user').insertOne(req.body,function(err,res){
		if (err) 
		{
			console.log(err);
		}
		console.log("document inserted go and check mongo database");
	});		
});


router.get('/',function(req,res){
 dbConn.get().collection("user").find({}).toArray(function(err, result) {
    if (err) throw err;
    res.json(result);
  });
  });
  
 
router.get('/finduser/email:email',function(req,res){	
	var email=(req.params.email);
	console.log(email);
  dbConn.get().collection("user").find({}, { projection: { to: email} }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
	 res.json(result);
  });
 });
  
router.delete('/deleteuser',function(req,res){
	var myquery = req.body;
	dbConn.get().collection("user").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
  });
 });
  
  
 
router.put('/updateuser',function(req,res){
	//console.log(req.body.name);
  var myquery = { name: req.body.name};
  var newvalues = { $set: {name: req.body.updatedName, address: req.body.updatedAddress } };
  dbConn.get().collection("user").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    
  });
});

module.exports = router;

