const mongoClient = require('mongodb').MongoClient;
const config = require('./config.json');
const username=process.env.mongo_username;
const password=process.env.mongo_password;

const mongoDbUrl = `mongodb://127.0.0.1:27017`;
let mongodb;


console.log(username+"  "+password);

function connect(callback){
    mongoClient.connect(mongoDbUrl, (err, db) => {
        mongodb = db.db("mydb");
        callback();
    });
}
function get(){
    return mongodb;
}

function close(){
    mongodb.close();
}

module.exports = {
    connect,
    get,
    close
};

