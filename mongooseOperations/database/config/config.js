const mongoose = require('mongoose');
const userName = process.env.username;
const password = process.env.password;
const dbName = process.env.db;
const myUrl = process.env.myUrl;
const port = process.env.port;
const url = `mongodb://${userName}:${password}@${myUrl}:${port}`

mongoose.Promise = global.Promise;
exports.mongoConn = () => {
mongoose.connect(url, {
    useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
}
