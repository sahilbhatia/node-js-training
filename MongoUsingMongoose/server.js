const express = require('express');
const bodyParser = require('body-parser');
// Configuring the database
const dbConfig = require('./config.js');
// create express app
const app = express();
var http = require('http');
var httpServer = http.createServer(app);
// parse requests of content-type 
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
//Reference of the router file
const routerObj = require('./routes');
app.use('/',routerObj);
//connecting to the database !!!
dbConfig.connect();
httpServer.listen(8443);
