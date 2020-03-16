const express = require('express');
const app = express();
const routingFile= require("./userRouter.js");

const file1 = require('./mongoConn.js');

app.use('/user',routingFile);

app.listen(3000);
console.log('server started at 3000');

file1.connect(function(err){
	if(err)
	{
		console.log("error");
	}
});