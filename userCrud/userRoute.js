const express = require('express');
const router = express.Router();
const db = require('./dbConnect');
const bodyparser = require('body-parser');
router.use(bodyparser.json());

router.get('/',function(req,res){
	res.json({'url':'get api in User Router'});
});
router.post('/add',function(req,res){
	db.getMongoObj().collection('user').insertOne(req.body,function(err,result){
		if(err){
			console.log(err);
		}else{
			console.log(result);
		}
	}); 
	res.json({'status':'inserted Successfully'});
}
);

module.exports = router;

/* 
console.log(req.body);
	console.log(dbObject.connect());
	 dbObject.dbObj.collection("user").insertOne(req.body,function(err,result){
		if(err){
			console.log(err);
		}else{
			console.log(result);
		}
	});  */