const express = require('express');
const email = require('./emailApi')
const app = express();

app.use('/email',email);
app.listen(3007,function(){
	console.log('Server is running on Port 3007');
}
); 