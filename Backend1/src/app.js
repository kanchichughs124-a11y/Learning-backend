//Main role is to create SERVER.

const express= require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const notes=[];



app.get("/",(req,res)=>{
    res.send("This is server")
})



//POST REQUEST
app.post("/notes",(req,res)=>{
        notes.push(req.body);  //push note in the empty array
        res.status(201).json({       //send response to postman after it successfully posted note to server
            message:"note created successfully"
        })
    
})


//GET REQUEST
app.get("/notes",(req,res)=>{// postman is put on GET request and postman gets notes from this server and after notes are fetched from this server (notes) , message is sent.
    res.status(201).json({
        message:"notes fetched successfully",
        notes:notes
    })
})




//DELETE REQUEST
app.delete("/notes/:index",(req,res)=>{
    const index= req.params.index;
    delete notes[index]
    res.status(201).json({
        message : "note deleted successfully"
    })
})




//PATCH REQUEST
app.patch("/notes/:index",(req,res)=>{
    const index=req.params.index;
    const title = req.body.title;
    notes[index].title = title;
    app.listen(201).json({
        message:"title updated successfully"
    })
})





app.listen(3000, ()=>{
    console.log("This is running on port 3000")
})

module.exports= app;