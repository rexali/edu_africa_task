var mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect("mongodb://localhost:27017/edudb",{});

module.exports = {mongoose};