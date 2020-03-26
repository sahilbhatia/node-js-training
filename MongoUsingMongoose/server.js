const express = require('express');
const bodyParser = require('body-parser');
// Configuring the database
const dbConfig = require('../MongoUsingMongoose/configuration/config');
// create express app
const app = express();
var http = require('http');
var httpServer = http.createServer(app);
// parse requests of content-type 
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
//Reference of the router file
const routerObj = require('../MongoUsingMongoose/Router/routes');
app.use('/',routerObj);
//connecting to the database !!!
dbConfig.connect(function (err)
{
  if(err) console.log(err);
  httpServer.listen(8443,function(err)
  {
    if(err) console.log(err);
    console.log("Server running on port 8443")
  });
});

