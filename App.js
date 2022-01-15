const express = require('express');
var app = express();
app.use(express.json());

var loginUser = require('./routes/login');

app.use("/api/v1/",loginUser)


module.exports = app