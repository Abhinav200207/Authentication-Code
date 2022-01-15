const mongoose = require('mongoose');
var bcrypt = require("bcrypt")
var jwt = require("jsonwebtoken");
const validator = require("validator");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email required"],
        validate: [validator.isEmail, "Not a valid email"]
    },
    password: {
        type: String,
        required: [true, "Password required"],
        select: false,
    },
    role: {
        type: String,
        default: "visitor"
    }
});



module.exports = mongoose.model("user", userSchema)