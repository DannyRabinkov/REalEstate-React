const config = require("config");
const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 70,
  },

  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
  },
  biz: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  cards: {
    type: Array,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      biz: this.biz,
    },
    config.get("jwtKey")
  );
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(70).required(),
    email: Joi.string().min(6).max(255).email().required(),
    password: Joi.string().min(6).max(255).required(),
    biz: Joi.boolean().required(),
  });

  return schema.validate(user);
}

function validateCards(data) {
  const schema = Joi.object({
    cards: Joi.array().min(1).required(),
  });
  return schema.validate(data);
}

module.exports = {
  User,
  validateUser,
  validateCards,
};
