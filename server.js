//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

//Set up PORT
const PORT = process.env.PORT || 3000;

//Require models
//const db = require("./models");

//Use express
const app = express();

//Use logger?
//app.use(logger("dev"));

//Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

//Connect to mongodb
let workoutDb = process.env.MONGODB_URI || "mongodb://localhost/workouts";
mongoose.connect(workoutDb, {useNewUrlParser: true});

app.listen(PORT, () =>{
	console.log(`Running on port ${PORT}`)
});

