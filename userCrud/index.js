const express = require('express');
const user = require('./userRoute');
const app = express()	;
const mongo = require('./dbConnect');

app.use('/user',user)
mongo.connect(()=>{
		app.listen(3004,function(){
		console.log('Server Started on port 3004');
	}
);
});