const mongoose = require('mongoose');
const userName = process.env.username;
const password = process.env.password;
const dbName = process.env.db;

mongoose.Promise = global.Promise;
exports.mongoConn = () => {
	
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}?authSource=admin`, {
	user:userName,
	pass:password,
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
}

