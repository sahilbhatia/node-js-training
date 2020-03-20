const express = require('express');
const bodyParser = require('body-parser');
// Configuring the database
const dbConfig = require('./config.js');
// create express app
const app = express();
//var fs = require('fs');
//var https = require('https');
//var privateKey  = fs.readFileSync('./key.pem', 'utf8');
//var certificate = fs.readFileSync('./cert.pem', 'utf8');
//var credentials = {key: privateKey, cert: certificate};
var http = require('http');
var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);

// parse requests of content-type 
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
//Reference of the router file
const routerObj = require('./routes');
app.use('/',routerObj);
//connecting to the database !!!
dbConfig.connect();
httpServer.listen(8080);
//httpsServer.listen(8443);
