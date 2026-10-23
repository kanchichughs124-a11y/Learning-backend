const userModel = require("../models/user.model.js");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const config = require("./config/config.js");

export async function registerUser(req, res) {
    const { name, password } = req.body;
    const isalreadyregistered = await userModel.findOne({ 
        
        $or:[

            {name},
            {password}
        ]
    });

    if (isalreadyregistered){
        res.status(409).json({
            message:"User already registered"
        })
    } 
    const hashedpassword = crypto.createHash("sha256").update(password).digest("hex");

    const user = new userModel({
        name,
        password:hashedpassword
    })

    res.status(201).json({
        message:"User registered successfully",
        user
    })

    const token = jwt.sign({
        id: user._id
    },
    config.JWT_SECRET, {
        expiresIn: "1h"
    })
    res.status(201).json({
        message:"User registered successfully",
        user,
        token
    })
}