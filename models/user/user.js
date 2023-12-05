const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../../helpers");

const subscriptionList = ["starter", "pro", "business"];

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: subscriptionList,
    default: "starter",
  },
  avatarURL: {
    type: String,
    required: true,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, "Verify token is required"],
  },
  token: String,
});

userSchema.post("save", handleMongooseError);

const emailMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailMatch).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...subscriptionList),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailMatch).required(),
  password: Joi.string().min(6).required(),
});

const subscriptionUserSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required(),
});

const resendEmail = Joi.object({
  email: Joi.string().pattern(emailMatch).required(),
}).messages({ "any.required": "missing required field {#key}" });

const userSchemas = {
  registerSchema,
  loginSchema,
  subscriptionUserSchema,
  resendEmail,
};

const User = model("user", userSchema);

module.exports = {
  User,
  userSchemas,
};
