const express = require('express');
const app = express();

var notify = require('./notify')

app.use('/notify', notify)

app.listen(3000,function(){
  console.log('server running on port 3000');
})
