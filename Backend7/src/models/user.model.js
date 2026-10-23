const mongoose = require("mongoose");

const userSchema =  new mongooseSchema({
    username : { type: String, required: true, unique: true },
    password : { type: String, required: true , unique: true },
})

const userModel = mongoose.model("user", userSchema);