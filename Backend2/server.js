const app = require("./src/app")
const connectDB = require("./db/db")

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})