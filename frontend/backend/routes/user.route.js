const express = require("express");
const router = express.Router();

const createUser = require("../controllers/User.Controller.js");

router.post("/register", createUser);

module.exports = router;