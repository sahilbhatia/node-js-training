const myDbConnection = require('./mongo_Connection');

var emailFlag ;
var duplicateFlag ;
var arrayLength;
class validate
{
  emailvalidate(userObj)
   {
      var email = userObj.email;
      console.log("inside the email validate function");
      console.log(email);
      if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
      { emailFlag = true;
        console.log("Valid email !!");
      }
      else
      {
        console.log("Invalid email");
        emailFlag = false;
      }
      return emailFlag;
    }
      duplicateEmail(userObj,callback)
    {
      var searchObj = {email : userObj.email};
      myDbConnection.getUser().collection('userdetail').find(searchObj).toArray(function(err,result)
      {
        arrayLength = result.length;
        if(arrayLength == 0)
        {
          console.log("new email id");
          duplicateFlag = true;
        }
        else 
        {
          console.log("duplicate email id ");
          duplicateFlag = false;
        }
        callback(duplicateFlag);
      });
    }
}

module.exports = {validate}