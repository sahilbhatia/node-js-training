const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config.js');
const app = express();
const https = require('https');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
dbConfig.mongoConn();
const routerObj = require('./routes');

try {
    var request = https.get("/", function(response) {
        console.log(response.statusCode);
    }).on("error", function(error) {
        console.log(error.message);
    });
} catch(e) {
    console.log(e);
}


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
}
);







