//This file offers a set of routes for sending users to various html pages

//Dependencies
var path = require("path");

//Routes

module.exports = function(app){
	//Database call
	app.get("/exercise", (req, res) =>{
		//grabs data from workout db, exCollection and renders it 
		res.sendFile(path.join(__dirname, "../public/exercise.html"));
	});

	app.get("/stats", (req, res) =>{
		//grabs data from workout db, exCollection and renders it 
		res.sendFile(path.join(__dirname, "../public/stats.html"));
	})




};