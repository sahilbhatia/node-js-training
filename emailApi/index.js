const express = require('express');
const email = require('./emailApi')
const app = express();
const notification = require('./notification.js');

app.use('/email',email);
app.use('/notification',notification);
app.listen(3007,function(){
	console.log('Server is running on Port 3007');
}
);