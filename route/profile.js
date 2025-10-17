const express = require("express");
const { profile } = require("../controller/profile");
const route = express.Router();
route.get("/me", profile);
module.exports = route;
