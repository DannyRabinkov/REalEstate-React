const auth = require("../middleware/auth");
const { User, validateUser, validateCards } = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  let authSoc;
  if (user) {
    console.log("GOT HERE!!");
    user.auth = User.findById(user._id).select("-password");
    authSoc = user.auth;
    console.log(authSoc);
    return res.send(user);
  }
  console.log("DIDNT ENTERED!");
  //   console.log("user token!", userToken);
});
module.exports = router;
