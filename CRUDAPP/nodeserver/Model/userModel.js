const db = require("../db").getDb;

function User(userInfo) {
  this.name = userInfo.name;
  this.email = userInfo.email;
  this.address = userInfo.address;
  this.entryTime = new Date();
}

User.prototype.saveUser = () => {
  let databse = db();
  return databse.collection("usersList").insertOne(this);
};
module.exports = User;
