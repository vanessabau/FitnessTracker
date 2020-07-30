const router = require("express").Router();
const db = require("../models");
const mongoose = require("mongoose");
const path = require("path");

router.post("/exercise", ({body}, res) => {
	console.log(body.body);
	db.workout.insert(body.body, (error, data) =>{
		if(error){
			res.send(error);
		}else{
			res.send(data);
		}
	});
	// .then(exCollection =>{
	// 	res.json(exCollection);
	// })
	// .catch(err => {
	// 	res.status(400).json(err);
	// });
});

router.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/exercise.html"));
  // Exercise.find({})
    // .sort({ date: -1 })
    // .then(exCollection => {
    //   res.json(exCollection);
    // })
    // .catch(err => {
    //   res.status(400).json(err);
    // });
});

router.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/stats.html"));
  // Exercise.findOne({})
  //   .sort({ date: -1 })
  //   .then(exCollection => {
  //     res.json(exCollection);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
	//   });
	// console.log("Loading responses");
});


module.exports = router;

