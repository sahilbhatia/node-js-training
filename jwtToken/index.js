 
const express=require('express');
const app=express();
const dbConfig = require('./config.js');
const mongoose = require('mongoose');

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const routerObj = require('./userRout');
const user = require('./controller');
app.use('/user',routerObj);

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.listen(3004);
console.log("server started");

