const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

router.post("/add", userController.saveUser);

module.exports = router;
