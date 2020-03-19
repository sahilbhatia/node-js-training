const User = require('./userModel.js');
// add user
exports.create = (req, res) => {
  if(!req.body.email) {
      return res.status(400).send({
          message: "User email-id can not be empty"
      });
  }

  const user = new User({
      id : req.body.id || "Untitled User", 
      name : req.body.name,
      email : req.body.email,
      location :req.body.location
  });

  user.save()
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the User."
      });
  });
};

// get list
exports.getAll = (req, res) => {
  User.find()
  .then(user => {
      res.send(user);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving users."
      });
  });
};

// get user by email
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

// Update user
exports.update = (req, res) => {

  if(!req.body.email) {
      return res.status(400).send({
          message: "User email can not be empty"
      });
  }

  User.findOneAndUpdate(req.params.email, {
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

// Delete a user by email 
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

