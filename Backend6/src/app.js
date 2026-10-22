const express = require("express");

const app = express();



app.post("/register", validationRules.registerUserValidationRules, (req,res)=>{
    const {name,password}= req.body;


    res.status(200).json({
        message:"User registered successfully",
        user:{
            name,
            password
        }
    })
       
})


app.get("/",(req,res)=>{ 
    res.status(200).json({
        message:"This is a test route"
    })
})

module.exports = app;