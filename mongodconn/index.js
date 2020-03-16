const express = require('express');
const app = express();
const routingFile= require("./userRouter.js");

const dbConn = require('./mongoConn.js');

app.use('/',routingFile);

app.listen(3000);
console.log('server started at 3000');

dbConn.connect(function(err){
	if(err)
	{
		console.log("error");
	}
});

