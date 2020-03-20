const User = require('./model.js');

exports.create = (req, res) => {
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
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the Note."
      });
  });
};

exports.findAll = (req, res) => {
  User.find()
  .then(users => {
      res.send(users);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving notes."
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

  // Find note and update it with the request body
  User.findOneAndUpdate(req.params.email, {
    name: req.body.name,
    adharNo:req.body.adhar,
    panNo:req.body.pan,
    mobileNo:req.body.mobile
  }, {new: true})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "Note not found with id " + req.params.email
          });
      }
      res.send(user);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Note not found with id " + req.params.email
          });                
      }
      return res.status(500).send({
          message: "Error updating note with id " + req.params.email
      });
  });
};
