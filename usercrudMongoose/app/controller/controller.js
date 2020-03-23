const email = require('../email/email');
const UserDetails = require('../model/UserModel');
create = (req, res) => {

  const user = new UserDetails({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    mobileNo: req.body.mobileNo
  });
  user.save()
    .then(data => {
      res.send(data);
      email.helpmail(req.body.email);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Note."
      });
    });

};

findAll = (req, res) => {
  UserDetails.find().then(user => {
    res.send(user);
  }).catch(err => {
    res.status(500).send({
      message: err.message
    });
  });
}

findOne = (req, res) => {
  console.log(req.params.email);
  UserDetails.findOne({ email: req.params.email })
    .then(user => {

      if (!user) {
        return res.status(404).send({
          message: "Note not found with emailid " + req.params.email
        });
      }
      res.send(user);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Note not found with email " + req.params.email
        });
      }
      return res.status(500).send({
        message: "Error in retrieving such email" + req.params.email
      });
    });
};

update = (req, res) => {
  if (!req.params.email) {
    return res.status(400).send({
      message: "email of an user can't be empty"
    });
  }
  UserDetails.findOneAndUpdate({ email: req.params.email }, {
    mobileNo: req.body.mobile,
    name: req.body.name
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with the given email id " + req.params.email
        });
      }
      console.log(req.params.email);
      res.send(user);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "user not found with emailid " + req.params.email
        });
      }
      return res.status(500).send({
        message: "Error  occurred while updating note with email" + req.params.email
      });
    });
};

deleteByEmail = (req, res) => {
  UserDetails.findOneAndDelete(req.params.email)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "Note not found with the email " + req.params.email
        });
      }
      res.send({ message: "user deleted successfully!" });
    }).catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: "User not found with emailid " + req.params.email
        });
      }
      return res.status(500).send({
        message: "Could not delete the Userinfo with email :" + req.params.email
      });
    });
};

setPassword = (req, res) => {
  console.log(req.body.password);
  // UserDetails.findOneAndUpdate(req.params.email, {
  //mobileNo: req.body.mobile,
  // name: req.body.name
  //}
  //update({email:"subhajit.nandi@joshsoftware.com"},{$set :{password :"abcd"}} ,{useFindAndModify:true}).then(user=>{
  ////UserDetails.findOneAndUpdate({email :req.params.email}, {password: req.body.password,mobileNo: req.body.mobile},{useFindAndModify:true}).then(user=>{
  UserDetails.updateOne({ email: req.params.email }, { $set: { password: req.body.password } }, { useFindAndModify: true }).then(user => {

    if (!user) {
      res.status(404).send({
        message: "No user with email  " + req.params.email
      });
    }
    else {
      res.json("User password has been set");
    }

  }).catch(err => {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "User  not found with email " + req.params.email
      });
    }
    else {
      return res.status(500).send({
        message: "Error occurs while updatind the password"
      });
    }
  })
}

login = (req, res) => {

  UserDetails.findOne({ email: req.body.email }).then(userinfo => {
    if (userinfo) {
      if ((userinfo.email == req.body.email) && (userinfo.password == req.body.password)) {

        res.json("Successful login with credential");
      }
      else {
        res.json("Invalid User")
      }
    }
    else {

      res.status(400).send({
        msg: " No User with the email Id "
      });
    }
  })
}
module.exports = {
  create,
  findAll,
  findOne,
  update,
  deleteByEmail,
  setPassword,
  login
};