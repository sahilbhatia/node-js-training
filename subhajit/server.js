const express = require('express');

const app = express();
let  mail = require('./router');
app.use('/email', mail);
app.listen(3001, function () {
  console.log('server running on  the port 3001 ');
})
