const User = require('./userModel.js');
const jwt=require('jsonwebtoken');
const secretkey="qwerty";


// home page
exports.home = (req, res) => {
  res.json("welcome to home page");
};



// user logout
exports.logout = (req, res) => {

  
};

//login
exports.login = (req, res) => {
    User.find({$and:[{email:req.body.email},{pass:req.body.pass}]})
    .then(user => {
        if(user.length){
            jwt.sign((req.body),secretkey,{expiresIn:'40s'},(err,token)=>{
           if(err)
           res.sendStatus(403);
           else
           res.json({"token":token});
            });
        }
        else
        res.sendStatus(403);
    }).catch(err => {
        res.sendStatus(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
  };
  


