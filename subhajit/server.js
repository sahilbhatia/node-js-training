const express = require('express');

const app = express();
var mail = require('./router');
app.use('/email', mail);
app.listen(3002, function () {


    console.log('server running on  the port 3002 ');
})
