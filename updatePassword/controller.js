const User = require('./userModel.js');
const sendMAil=require('./sendMail');
// add user
exports.create = (req, res) => {
  if(!req.body.email) {
      return res.status(400).send({
          message: "User email-id can not be empty"
      });
  }

  const user = new User({ 
      name : req.body.name,
      email : req.body.email,
      pass :""
  });

  user.save()
  .then(data => {
      res.send(data);
     var msg={to:req.body.email,text:"account created succsesfully pls set the password on localhost:8080/user/" +req.body.email }
    sendMAil.sendMail(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the User."
      });
  });
};



// Update user
exports.update = (req, res) => {

  if(!req.body.email) {
      return res.status(400).send({
          message: "User email can not be empty"
      });
  }
   var  mail={email:req.params.email};
  User.findOneAndUpdate(mail, {
      name : req.body.name,
      email : req.body.email,
      pass :req.body.pass
  }, {new: true})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with email " + req.params.email
          });
      }
      res.send(user);
      var msg={to:req.body.email,text:"your id is " +req.body.email+"password is"+req.body.pass }
      sendMAil.sendMail(msg);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "User not found with email " + req.params.email
          });                
      }
      return res.status(500).send({
          message: "Error updating user with email " + req.params.email
      });
  });
};

//login
exports.login = (req, res) => {
    User.find({$and:[{email:req.body.email},{pass:req.body.pass}]})
    .then(user => {
        if(user.length)
        res.send("login");
        else
        res.send("not a user");
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
  };
  


