require("dotenv").config();
const app = require("./src/app.js")
const connectDB = require("./db/db.js")

connectDB();

app.listen(3000,()=>{
    console.log("This is running on port 3000")
})