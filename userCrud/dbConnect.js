const mongoClient = require('mongodb').MongoClient;
const config = require('./config.json');
const mongoDbUrl = `mongodb://${config.mongodb.username}:${config.mongodb.password}@127.0.0.1:27017`;
let mongodb;

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
