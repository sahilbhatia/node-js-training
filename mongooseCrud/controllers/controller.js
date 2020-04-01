const User = require('../dbConnection/model/model');
const email = require('../email/email')
const jwt=require('jsonwebtoken');
const secretkey="jitu";
const TOKENEXPIRYTIME =process.env.TOKENEXPIRYTIME
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
    adharNo:req.body.adharNo,
    panNo:req.body.panNo,
    mobileNo:req.body.mobileNo
	});
	
	console.log('hi i am in create mode 2')
	// Save User in the database
  user.save()
  .then(data => {
		return data
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
	console.log(req.params.email)
  User.findOneAndRemove({email:req.params.email})
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
	
  if(!req.params.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
		return res.status(400).send({
			message: "User Email can not correct"
		});
  }

	User.findOneAndUpdate({email:req.params.email},
		{
			name:req.body.name,
			adharNo:req.body.adharNo,
			mobileNo:req.body.mobileNo,
			panNo:req.body.panNo
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
			message: "Error updating User with email " + err
		});
  });
};

exports.set = (req, res) => {
	// Validate Request
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
};


exports.findOne = (req, res) => {
  User.findOne({$and:[{email:req.body.email},{password:req.body.password}]})
  .then(users => {
		if((req.body.email == users.email) && (req.body.password == users.password)){
			jwt.sign((req.body),secretkey,{expiresIn:TOKENEXPIRYTIME},(err,token)=>{
				if(err)
				res.sendStatus(403);
				else
				res.json({"message":"Login Successful","token":token});
				 });
		}
		else
			res.send(404);	
  }).catch(err => {
		res.status(500).send({
			"status":"Login Failed"
		});
	});
};
