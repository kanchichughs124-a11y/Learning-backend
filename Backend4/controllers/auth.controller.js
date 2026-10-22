const userModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken")

async function registerUser(req,res){

    const {name,password} = req.body;


    const isUserExist = await userModel.findOne({username:name})

    if(isUserExist){
        return res.status(409).json({
            message:"user already exists"
        })
    }


    const user = await new userModel({
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