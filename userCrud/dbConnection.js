const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
var dbo;


function getConnection(callback){

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
     dbo = db.db("mydb");
    callback();
  });
}

function getmydb(){
  return dbo;
}

module.exports={
                 getmydb,
                getConnection
                 };


