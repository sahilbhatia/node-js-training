const express = require('express');
const app = express();

const notificationFile= require('./sendNotification.js');

app.use('/email', notificationFile);

app.listen(3000);
console.log('server at 3000');

