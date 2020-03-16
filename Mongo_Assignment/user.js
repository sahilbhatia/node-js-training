const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var userDetails;
var status;
router.use(bodyParser.json());
const myDbConnection = require('./mongo_Connection');

//Router to get all user Details !!!!
router.get('/',function(req,res)
{
 myDbConnection.getUser().collection('userdetail').find().toArray(function(err,result)
 {
   if(err) 
   {console.log(err)}
   userDetails = result;
   console.log(userDetails);
 }); 
 res.json(userDetails);
})

//Search by email id !!!!!!!!!
router.get('/:email',function(req,res)
{
  var searchObj = {email : req.params.email};
 myDbConnection.getUser().collection('userdetail').find(searchObj).toArray(function(err,result)
 {
   if(err) 
   {console.log(err)}
   userDetails = result;
   console.log(userDetails);
 }); 
 res.json(userDetails);
})

//Adding the user in the database !!!
router.post('/add',function (req,res) {
  //console.log(`${req.body}`);
  //Adding the user details json object into the userdetail table
  myDbConnection.getUser().collection('userdetail').insertOne(req.body, function(err, res) 
  {    
    if (err) 
    { //if inserting data fails
      console.log(err);
    }
    console.log("1 document inserted");
  });
  res.json(`User Added to Database !!! `);
})

//delete user by emailid !!!!!!!!!
router.delete('/deleteuser/:email',function(req,res)
{
  console.log(req.params.email);
  var deleteobj = { email : req.params.email};
  myDbConnection.getUser().collection('userdetail').deleteOne(deleteobj,function(err,obj)
  {
    status = obj.result.n;
    if(err)
    {console.log(err);}
    if((obj.result.n) == 0) {console.log(`Data with email id :${req.params.email} is not present`);}
    else { console.log(`${obj.result.n} document deleted`);}
  });
  if((status) == 0)
  {res.json(`Data with email id :${req.params.email} is not present`);}
  else  
  {res.json(`document is been deleted with email id : ${req.params.email}!!!!`);}
})

//Update the details of the user !!!!!!
router.put('/updateuser/:email',function(req,res)
{
  console.log(req.params.email);
  console.log(req.body);
  var updateobj = { email : req.params.email};
  var updatebody = {$set : { id : req.body.id, name : req.body.name, email : req.body.email ,location : req.body.location}};
  myDbConnection.getUser().collection('userdetail').updateOne(updateobj,updatebody,function(err,obj)
  {
    status = obj.result.nModified;
    console.log(`Records updated : ${obj.result.nModified}`);
    if(err) console.log(err);
    if((obj.result.nModified) == 0)
    console.log(`Failed to update the document !! `);
    else
    console.log(`updated ${obj.result.nModified} document successfully !!!`);
  });
  if((status) == 0)
  {res.json(`Failed to update document with email id : ${req.params.email}`);}
  else{
    res.json(`Updated the document with email id : ${req.params.email}`);
  }
})
module.exports = router;
