var mongoconn = require('./configuration');
var mongodb;
mongoClient = mongoconn.mongoclient();
mongoDbUrl = mongoconn.geturl();
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