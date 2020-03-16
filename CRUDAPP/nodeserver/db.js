const mongodb = require("mongodb");
const MongoClinet = mongodb.MongoClient;

let _db = null;
const mongoConnect = callback => {
  MongoClinet.connect("mongodb://localhost:27017/employeeDB", {
    useUnifiedTopology: true
  })
    .then(client => {
      _db = client.db();
      callback();
    })
    .catch(error => {
      console.log("error: ", error);
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No databse found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
