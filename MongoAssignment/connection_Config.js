const mongoClient = require('mongodb').MongoClient;
let dbObj;
//Declaring environment variable!!!!!
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const mongoUrl = process.env.URL;
const mongoPort = process.env.PORT;

function connect()
{
  //Getting the Database credentails from environment variable!!!
  console.log(`username is == ${username}`);
  console.log(`password is ${password}`);
  console.log(`URL is : ${mongoUrl}`);
  console.log(`mongoPort : ${mongoPort}`);
    //Establishing connection with mongoDb !!!!!!
    //NODE_ENV=3004 USERNAME=userAdmin PASSWORD=**** URL=127.0.0.1 PORT=27017 node server.js
    mongoClient.connect(`mongodb://${username}:${password}@${mongoUrl}:${mongoPort}`,function(err, db){  
      if(err) 
        console.log(err);
      else
      {
        console.log('Mongo Connection done...');
        dbObj = db;
      }
    });
}
//Connecting to the required Database!!!!
function connectToDb(dbName) {
  let dbNameConn = dbObj.db(dbName);
  return dbNameConn;
}
module.exports = {connect,connectToDb};
  