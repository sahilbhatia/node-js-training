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
  res.json({ "insertion ": "true" })
})



module.exports = router;