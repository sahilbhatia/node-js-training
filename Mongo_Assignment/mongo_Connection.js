const mongoClient = require('mongodb').MongoClient;
const mongoDbUrl = 'mongodb://127.0.0.1:27017';

let userdb;
let dbobj;

//sending the reference of the mongoDb connection
function connect(callback){
    mongoClient.connect(mongoDbUrl, (err, db) => {
        if(err)
          console.log(err);
        dbobj = db;
        userdb = db.db("user");  //reference of your created database!!
        callback();
    });
}

function getUser(){
    return userdb;  //sending the reference of the database you created !!
}

function close(){
    dbobj.close(); //Closing the connection with your databases !!
}

module.exports = {
    connect,
    getUser,
    close
};
 
