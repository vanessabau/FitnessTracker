//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//Set up PORT
const PORT = process.env.PORT || 3000;


//Use express
const app = express();

//Use Morgan
app.use(morgan("dev"));

//Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));


//Connect to mongo database
let workoutDb = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(workoutDb, {useNewUrlParser: true, useFindAndModify: false});


//Routes
app.use(require("./routes/api.js"));
app.use(require("./routes/htmlRoutes.js"));


app.listen(PORT, () =>{
	console.log(`Running on port ${PORT}`)
});

