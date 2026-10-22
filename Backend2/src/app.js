const express=require("express");
const app = express();
const noteModel = require("./models/note.model")

app.use(express.json());

app.post("/notes", (req,res)=>{
    const data = req.body
    noteModel.create({
    title : data.title,
    description: data.description
})
    res.status(201).json({
        message:"note created successfully"
    })

})




app.get("/notes", async (req,res)=>{
    const notes = await noteModel.find() //returns array of objects
    res.status(200).json({
        message:"notes fetched successfully",
        notes: notes
    })
})





app.get("/notes", async (req,res)=>{
    const notes = await noteModel.findOne({
        title:"testtitle4"
    }) //return object or null
    res.status(200).json({
        message:"notes fetched successfully",
        notes: notes
    })
})




app.delete("/notes/:id", async (req,res)=>{
    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"note deleted successfully"
    })
})




app.patch("/notes/:id", async (req,res)=>{
    const id = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({
        _id:id},
        {
        description:description
    })
    res.status(200).json({
        message:"note updated successfully"
    })
})




app.listen(3000)

module.exports = app;