// const auth = require("../middleware/auth");
const { User } = require("../models/user");
const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const router = express.Router();

router.post("/auth", async (req, res) => {
  const decoded = jwt.verify(req.body.token, config.get("jwtKey"));
  try {
    const user = await User.findById(decoded._id).select("-password");
    if (user) {
      console.log("valid");
      return res.status(200).send({ valid: true });
    }
  } catch (error) {
    // console.log(error);
  }
  console.log("invalid");
  return res.status(400).send({ valid: false });
});
module.exports = router;
