const express = require('express');
const router = express.Router();
const myDbConn = require('./mongoConn');
const bodyparser = require('body-parser');

router.use(bodyparser.json());

router.post('/add', function (req, res) {
  //inserting data into the collection
  myDbConn.get().collection('userdetail').insertOne(req.body, function (err, res) {
    if (err) { //if inserting data fails we will git the error description
      console.log(err);
    }
    else {
      console.log("1 document inserted");
    }
  });
  res.json({ "insertion ": "true" });
})

router.delete('/delete', function (req, res) {
  myDbConn.get().collection('userdetail').deleteOne(req.body, function (err, res) {
    if (err) {
      console.log(err);

    }
    else {
      console.log("1 item deleted");
    }
  });
  res.json({ "deletion": "true" });

})

router.patch('/update', function (req, res) {
  var newData = { $set: { name: "Sachin" } };
  // myDbConn.get().collection('userdetail').updateOne(req.body.old,req.body.new,function(err,res){
  myDbConn.get().collection('userdetail').updateOne(req.body, newData, function (err, res) {
    // console.log(req.body.new);
    // console.log(req.body.old);
    if (err) {
      console.log(err);
    }
    else {
      console.log("1 data updated successfully");
    }
  });
  res.json({ "updation": "true" });
});



module.exports = router;