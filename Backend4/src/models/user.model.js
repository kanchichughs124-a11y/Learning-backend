const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
    username : {
        type:String,
        unique:true
    },
    password : String
})

const userModel = mongoose.Model("user",userShema);

module.exports = userModel;