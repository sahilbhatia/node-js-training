const express = require('express');
const app = express.Router();
const file = require('./mongoConn.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.post('/adduser',function(req,res){

	file.get().collection('user').insertOne(req.body,function(err,res){
		if (err) 
		{
			console.log(err);
		}
		console.log("document inserted go and check mongo database");
	});		
});

module.exports = app;