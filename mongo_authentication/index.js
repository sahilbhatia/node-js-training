const express = require('express');
const app = express();
const file= require("./userRouter.js");

const file1 = require('./mongoConn.js');

app.use('/user',file);

app.listen(3000);
console.log('server started at 3000');

file1.connect(function(err){
	if(err)
	{
		console.log("error");
	}
});