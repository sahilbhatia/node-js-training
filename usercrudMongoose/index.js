const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http=require('http');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const dbconfig = require('./configuration/dbconfig');
const route = require('./app/routes/userRoutes');
dbconfig.connection;
app.use('/main', route);
http.createServer(app).listen(3001,function(){
  console.log("running on port 3001");
})
