const userModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken")

async function registerUser(req,res){

    const {name,password} = req.body;


    const user = new userModel({
        username, name, password
    })
    const token = jwt.sign({
        id: user._id
    },
    process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message:"user registered successfully",
        user,
        token
    })


}

module.exports = {registerUser};