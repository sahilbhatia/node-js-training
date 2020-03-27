const User = require('/home/jitendra/Node-Js_Training/git_training/node-js-training/mongooseCrud/dbConnection/model/model');
const email = require('/home/jitendra/Node-Js_Training/git_training/node-js-training/mongooseCrud/email/email')
const jwt=require('jsonwebtoken');
const secretkey="jitu";
//const validate = valid.validate;
//const validateError = valid.ValidationError

exports.create = (req, res) => {
	console.log('hi i am in create mode')
  // Validate request
  if(!req.body.email) {
		return res.status(400).send({
			message: "User email can not be empty"
		});
  }

  // Create a User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    adharNo:req.body.adhar,
    panNo:req.body.pan,
    mobileNo:req.body.mobile
  });

	// Save User in the database
  user.save()
  .then(data => {
		return
  }).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the User."
		});
	});
	var obj = {
		from :'jitendrasbunde@gmail.com',
		to :"jitendrasbunde@gmail.com",
		subject  :'Accout Details',
		 text :"Name"+req.body.name+" email :"+req.body.email+"    Please Set Password"
	}

	email.mailSend(obj);
	res.json({'status':'Created'})
};

exports.findAll = (req, res) => {
  User.find()
  .then(users => {
		res.send(users);
  }).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving users."
		});
  });
};

exports.delete = (req, res) => {
  User.findOneAndRemove(req.params.email)
  .then(user => {
		if(!user) {
			return res.status(404).send({
				message: "User not found with email " + req.params.email
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

exports.update = (req, res) => {
	// Validate Request
	
  if(!req.body.email) {
		return res.status(400).send({
			message: "User Email can not be empty"
		});
  }

  User.findOneAndUpdate(req.params.email, {
    name: req.body.name,
    adharNo:req.body.adhar,
    panNo:req.body.pan,
    mobileNo:req.body.mobile
  })
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
				message: " not found with email " + req.params.email
			});                
		}
		return res.status(500).send({
			message: "Error updating User with email " + req.params.email
		});
  });
};

exports.set = (req, res) => {
	// Validate Request
	
  if(!req.body.email) {
		return res.status(400).send({
			message: "User Email can not be empty"
		});
  }

  User.findOneAndUpdate(req.body.email, {
    password:req.body.password
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
				message: " not found with email " + req.params.email
			});                
		}
		return res.status(500).send({
			message: "Error updating User with email " + req.params.email
		});
  });
};


exports.findOne = (req, res) => {
  User.find({$and:[{email:req.body.email},{pass:req.body.pass}]})
  .then(users => {
		if(users.length!=0){
			jwt.sign((req.body),secretkey,{expiresIn:'40s'},(err,token)=>{
				if(err)
				res.sendStatus(403);
				else
				res.json({"token":token});
				 });
		}
		else
			res.send({'url':'Not Found'});	
  }).catch(err => {
		res.status(500).send({
			"status":"Login Failed"
		});
	});
};

