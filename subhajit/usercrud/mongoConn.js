const mongoClient = require('mongodb').MongoClient;
const mongoDbUrl = 'mongodb://127.0.0.1:27017';
var mongodb;
function connect(callback) {

  mongoClient.connect(mongoDbUrl, { useUnifiedTopology: true }, (err, db) => {
    if (err)
      console.log(err);

    mongodb = db.db("User");

    callback();
  });
}
function get() {
  return mongodb;
}

function close() {
  db.close();
}

module.exports = {
  connect,
  get,
  close
};