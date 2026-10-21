const express = require('express');
const authRoutes = require("./routes/auth.route.js")
const cookieParser = require("cooker-parser")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth",authRoutes)

module.exports = app;