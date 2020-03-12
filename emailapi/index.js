var express = require('express');
var app = express();

var notification= require('./sendnotification.js');

app.use('/email', notification);

app.listen(3000);
console.log('server at 3000');