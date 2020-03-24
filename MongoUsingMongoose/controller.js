const User = require('./userModel.js');
const sendEmail = require('./sendEmail');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

// Create and Save a new User
exports.create = (req, res) => {
  // Create a User
  const user = new User({
      id : req.body.id || "Untitled User", 
      name : req.body.name,
      email : req.body.email,
      location :req.body.location,
      password :req.body.password
  });
  const errors = validationResult(req);
  //validating email
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
    }
if(!req.body.email) {
  return res.status(400).send({
      message: "User email-id can not be empty"
  });
}
  // Save User in the database
  user.save()
  .then(data => {
      res.send(data);
      sendEmail.emailData(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the User."
      });
  });
};

// Retrieve and return all user from the database.
exports.findAll = (req, res) => {
  User.find()
  .then(user => {
      res.send(user);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving users."
      });
  });
};

// Find a single User with a user email
exports.findOne = (req, res) => {
  console.log(req.params.email);
  User.findOne({email :req.params.email})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with email " + req.params.email
          });            
      }
      res.send(user);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "User not found with email " + req.params.email
          });                
      }
      return res.status(500).send({
          message: "Error retrieving user with email " + req.params.email
      });
  });
};

// Update a user identified by the email in the request
exports.update = (req, res) => {
  // Validate Request
  if(!req.body.email) {
      return res.status(400).send({
          message: "User email can not be empty"
      });
  }

  // Find user and update it with the request body
  User.findOneAndUpdate({email :req.params.email}, {
      id : req.body.id || "Untitled user",
      name : req.body.name,
      email : req.body.email,
      location :req.body.location
  }, {new: true})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with email " + req.params.email
          });
      }
      res.send(user);
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

// Delete a user with the specified email in the request
exports.delete = (req, res) => {
  User.findOneAndDelete(req.params.email)
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with email" + req.params.email
          });
      }
      res.send({message: "User deleted successfully!"});
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "User not found with email " + req.params.email
          });                
      }
      return res.status(500).send({
          message: "Could not delete user with email " + req.params.email
      });
  });
};

exports.updatePassword = (req,res) =>
{
     // Find user and update it with the request body
  User.findOneAndUpdate({email : req.params.email}, {
    password : req.body.password
    }, {new: true})
    .then(user => {
    if(!user) {
        return res.status(404).send({
            message: "User not found with email " + req.params.email
        });
    }
    res.send(user);
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

}

exports.checkUser = (req,res) =>{
  User.findOne({email :req.body.email})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with email " + req.params.email
          });            
      }  
      if((req.body.email == user.email) && (req.body.password == user.password))
      {
          const username = {name : user.name};
          const accessToken = jwt.sign(username,process.env.ACCESSTOKEN,{expiresIn : '40s'});
          return res.status(200).send({
              message : "User is valid",
              Token : accessToken
          });
      }
      else{
          return res.status(404).send({
              message : "User is invalid"
          });
      }
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "User not found with email " + req.params.email
          });                
      }
      return res.status(500).send({
          message: "Error retrieving user with email " + req.params.email
      });
  });
}

exports.autheticateToken = (req,res,next) =>{
    const authHeader = req.headers['authorization'];
    const token =authHeader && authHeader.split(' ')[1];
    if(token == null) return res.status(401).send({
        message : "Token not provided"
    });
    console.log(token);
    jwt.verify(token,process.env.ACCESSTOKEN,(err,user) =>
    {
        if(err) return res.status(403).send({
            message: "Not a valid token" 
        });
        req.user =user;
        next();
    })
}
