const express = require('express');
const router = express.Router();
const myDbConn = require('./mongoConn');
const bodyparser = require('body-parser');

router.use(bodyparser.json());
var userResult;
router.get('/', function (req, res) {//get all the user

  myDbConn.get().collection('userdetail').find({}).toArray(function (err, res) {
    userResult=res;
    if (err) {
      console.log(err)
    }
    else {
      console.log("The details of the user");
      console.log(res);
    }


  })
  res.json(userResult);
})

router.get('/:email', function (req, res) {//get user with perticular email
  console.log(req.params.email);
  var findobj = { email: req.params.email };
  
  myDbConn.get().collection('userdetail').find(findobj).toArray(function (err, result) {
    userResult = result;
    if (err) {

      console.log(err)
    }
    else {
     
      console.log("The details of the user with email");
      console.log(userResult);
    }


  })
  res.json(userResult);
})

router.post('/add', function (req, res) {
  //inserting data into the collection
  myDbConn.get().collection('userdetail').insertOne(req.body, function (err, res) {
    if (err) { //if inserting data fails we will get the error description
      console.log(err);
    }
    else {
      console.log("1 document inserted");
    }
  });
  res.json({ "insertion ": "true" });
})

router.delete('/delete', function (req, res) {//delete with the use of request body
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

router.delete('/delete/:email', function (req, res) {//delete with the use of request param

  var delobj = { email: req.params.email };
  console.log(req.params.email);
  myDbConn.get().collection('userdetail').deleteOne(delobj, function (err, obj) {

    noOfDelItem = obj.result.n;
    if (err) {
      console.log(err);
    }
    if ((noOfDelItem) < 1) {
      console.log("no item with given email");
    }
    if ((noOfDelItem) == 1) {
      console.log("1 item deleted");
      console.log(obj);
    }
  });
  res.json({ "deletion": "true" });
})

router.put('/update/:email', function (req, res) {//updation
  console.log(req.params.email);
  var newData = { $set: { id: req.body.id, name: req.body.name, email: req.body.email } };
  var previous = { email: req.params.email }
  myDbConn.get().collection('userdetail').updateOne(previous, newData, function (err, obj) {
    
    if ((obj.result.nModified) == 0)
      console.log(`Failed to update the document !! `);
    else
      console.log(`updated ${obj.result.nModified} document successfully !!!`);
  }) 
  res.json({"updation":"true"});
})


module.exports = router;