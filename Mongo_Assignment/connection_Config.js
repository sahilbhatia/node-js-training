const mongoClient = require('mongodb').MongoClient;

let dbObj;

//Declaring environment variable!!!!!
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

function connect()
{
  //Getting the Database credentails from environment variable!!!
  console.log(`username is == ${username}`);
  console.log(`password is ${password}`);

    //Establishing connection with mongoDb!!!!!!
    mongoClient.connect(`mongodb://${username}:${password}@127.0.0.1:27017`,function(err, db){  
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
  return dbObj.db(dbName);
}

module.exports = {connect,connectToDb};
  