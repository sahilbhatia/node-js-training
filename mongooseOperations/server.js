const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

var http = require('http');
var httpServer = http.createServer(app);

app.use(bodyParser.json())
dbConfig.mongoConn();
const routerObj = require('./routes');
app.use('/',routerObj);

httpServer.listen(3000);






