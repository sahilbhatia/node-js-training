const User = require('./userModel.js');
const userClass =require('./userDetails.js');
const { check, validationResult } = require('express-validator');
const mailSender = require('./mailApi');
exports.create = (req, res) => {
const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
  if(!req.body.email) {
      return res.status(400).send({
          message: "User email-id can not be empty"
      });
  }
	const userDetail = new userClass.UserDetails(req.body.email,req.body.name,req.body.mobile_no);
	let uEmail = userDetail.getUserEmail();
	let uName = userDetail.getUserName();
	let uMobileNo = userDetail. getUserMobileNo();
  const user = new User({
      name : uName|| "unknown name",
      email : uEmail ,
      location :req.body.location
  });

  user.save()
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: "email already exist"
      });
  });
  
   var mailOptions = {
	from: 'onkarhasabe1@gmail.com',
	to: uEmail,
	subject: 'Testing NodeJs - confirmation of email',
	cc: 'onkar.hasabe@joshsoftware.com',
	text: `dear user your email id `+uEmail+` have been successfully registered to generate password contact to developer`

	};

mailSender.senderFunction(mailOptions);
};

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

exports.findOne = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	const userDetail = new userClass.UserDetails(req.params.email);
	let uEmail = userDetail.getUserEmail();
  User.findOne({"email" : uEmail})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with email " + uEmail
          });            
      }
      res.send(user);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "User not found with email " + uEmail
          });                
      }
      return res.status(500).send({
          message: "Error retrieving user with email " + uEmail
      });
  });
};

exports.update = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
 
  if(!req.body.email) {
      return res.status(400).send({
          message: "User email can not be empty"
      });
  }

	const userDetail = new userClass.UserDetails(req.body.email,req.body.name,req.body.mobile_no);
	let uEmail = userDetail.getUserEmail();
	let uName = userDetail.getUserName();
	let uMobileNo = userDetail. getUserMobileNo();
		
  User.findOneAndUpdate({"email" : req.params.oldemail}, {
      name : uName,
      email : uEmail,
      location :req.body.location
  }, {new: true})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with emailid  " + req.params.email
          });
      }
      res.send(user);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "User not found with emailid " + req.params.email
          });                
      }
      return res.status(500).send({
          message: "Error updating user with email  id" + req.params.oldemail
      });
  });
   
};

exports.setUser = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
 
  if(!req.params.oldemail) {
      return res.status(400).send({
          message: "User email can not be empty"
      });
  }

	const userDetail = new userClass.UserDetails(req.body.email,req.body.name,req.body.mobile_no);
	let uEmail = userDetail.getUserEmail();
	let uName = userDetail.getUserName();
	let uMobileNo = userDetail. getUserMobileNo();
		
  User.findOneAndUpdate({"email" : req.params.oldemail}, {
      name : uName,
	  password : req.body.password,
      location :req.body.location
  }, {new: true})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with emailid  " + req.params.email
          });
      }
      res.send(user);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "User not found with emailid " + req.params.email
          });                
      }
      return res.status(500).send({
          message: "Error updating user with email  id" + req.params.oldemail
      });
  });
   
   var mailOptions = {
	from: 'onkarhasabe1@gmail.com',
	to: uEmail,
	subject: 'confirmation of email',
	text: `dear user your email id `+uEmail+` have been successfully registered your password is `+req.body.password
	};

mailSender.senderFunction(mailOptions);
};

exports.delete = (req, res) => {
	const userDetail = new userClass.UserDetails(req.params.email);
	let uEmail = userDetail.getUserEmail();
  User.findOneAndDelete({"email" : uEmail})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with email" + uEmail
          });
      }
      res.send({message: "User deleted successfully!"});
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
return res.status(404).send({
              message: "User not found with email " + uEmail
          });                
      }
      return res.status(500).send({
          message: "Could not delete user with email " + uEmail
      });
  });
};

exports.login = (req, res) => {
    console.log(req.params.email);
  User.findOne({email :req.params.email})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with email " + req.params.email
          });            
      }  
      if((req.body.email == user.email) && (req.body.password == user.password))
      {
          return res.status(200).send({
              message : "User is valid"
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


