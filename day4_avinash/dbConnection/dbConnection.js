const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
var dbo;
function addData(dbo,data){

  MongoClient.connect(url, function(err, db) {
    if (err) 
    {
      console.log(err);
    }
    else
    {
    dbo.collection("customers").insertOne(data, function(err, res) {
      if (err)
      console.log(err);
      else
      console.log(data);
    
    });
  }
  });


}

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
                addData,
                getConnection
                 };
