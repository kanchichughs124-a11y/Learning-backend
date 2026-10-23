const express = require("express");
const app = express();
const morgan = require("morgan");
const authRouter = require("./routes/auth.route.js");


app.use(express.json());
app.use(morgan("dev"));





module.exports = app;