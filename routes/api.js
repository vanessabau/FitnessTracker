const router = require("express").Router();
const Exercise = require("../models/exerciseModel.js");
const path = require("path");

router.post("/api/exercise", ({ body }, res) => {
  Exercise.create(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/api/stats", (req, res) => {
	Exercise.find()
    //.sort({ date: -1 })
    .then(dbExercise => {
			console.log(dbExercise);
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/exercise", ({ body }, res) => {
  Exercise.create(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/stats", (req, res) => {
	console.log("stats!");
	Exercise.exerciseModel.find({})
	.then(dbExercise =>{
		res.json(dbExercise);
	})
	.catch(err =>{
		res.json(err);
	});
})


module.exports = router;

