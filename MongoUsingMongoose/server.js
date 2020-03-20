const express = require('express');
const bodyParser = require('body-parser');
// Configuring the database
const dbConfig = require('./config.js');
// create express app
const app = express();
// parse requests of content-type 
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
//Reference of the router file
const routerObj = require('./routes');
app.use('/',routerObj);
//connecting to the database !!!
dbConfig.connect();
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
