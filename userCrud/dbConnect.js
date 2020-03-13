/*const MongoClient = require('mongodb'). MondoClient;
const url ="mongodb://localhost:271017/";
var dbo 

MongoClient.connect(url, function(err, db){
	if(err){
		console.log(err);
	}else{
		dbo = db.db('mydb');
	}
});*/

/* 
var dbo;
exports.connect = ()=>{
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
 MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  if (err) 
  {
	  console.log(err);
  }
  dbo = db.db("mydb");
});
} 
let obj;
 var MongoClient = require('mongodb').MongoClient;
function connect(callback){
	var url = "mongodb://localhost:27017/";
	var obj = MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
	  if (err) throw err;
	  console.log("Database created! 1");
		var dbo = db.db("mydb").collection('user');
		 //console.log(dbo);
	   console.log("Database created! 2");
	   console.log(dbo);
	   obj=dbo;
	   
	   callback();
	   });
}

function get(){
    return obj;
}
module.exports = {
	get,
	obj,
	connect
	};*/


const mongoClient = require('mongodb').MongoClient;
const Url = 'mongodb://127.0.0.1:27017';
let mongodb;

function connect(callback){
	mongoClient.connect(Url, (err, db) => {
		mongodb = db.db('mydb');
		callback();
	});
}

function getMongoObj(){
  return mongodb;
}

function close(){
  mongodb.close();
}

module.exports = {
	connect,
	getMongoObj,
}; 