const express= require('express');
const router = express.Router();


router.post("/create", (req,res)=>{
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message : "Unauthorised"
        })
    }




try{
    jwt.verify(token,process.env.Router_SECRET)}

    catch(err){
        res.status(401).json({
            message:"Invalid token"
        })
    }
        

    res.send("Post created successfully")
})


module.exports = router;