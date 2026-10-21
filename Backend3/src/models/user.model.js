const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
    name : String,
    password : String
})

const userModel = mongoose.Model("user",userShema);

module.exports = userModel;