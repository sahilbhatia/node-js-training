//const dbConfig = require('./config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const username = process.env.username;
const password = process.env.password;
const dbName = process.env.dbName;

exports.connect =()=>{
  mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}?authSource=admin`, {
    user:username,
    pass:password,
    useNewUrlParser: true
  }).then(() => {
    console.log("Successfully connected to the database");    
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });
}
