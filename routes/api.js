const router = require("express").Router();
const Exercise = require("../models/exercise.js");
const mongoose = require("mongoose");
const path = require("path");

router.post("/exercise", ({body}, res) => {
	Exercise.create(body)
	.then(exCollection =>{
		res.json(exCollection);
	})
	.catch(err => {
		res.status(400).json(err);
	});
});

router.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/exercise.html"));
  // Exercise.find({})
  //   .sort({ date: -1 })
  //   .then(exCollection => {
  //     res.json(exCollection);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

router.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/stats.html"));
  Exercise.findOne({})
    .sort({ date: -1 })
    .then(exCollection => {
      res.json(exCollection);
    })
    .catch(err => {
      res.status(400).json(err);
	  });
	console.log("Loading responses");
});

module.exports = router;

