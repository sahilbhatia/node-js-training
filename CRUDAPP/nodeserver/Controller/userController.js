const UserModel = require("../Model/userModel");

const UserController = {
  saveUser: async function(req, res) {
    console.log("req: ", req.body);
    let userObject = new UserModel(req.body);
    try {
      await userObject
        .saveUser()
        .then(result => {
          res.json(result);
        })
        .catch(error => {
          console.log("error: ", error);
        });
    } catch (error) {
      console.log("error: ", error);
    }
  }
};

module.exports = UserController;
