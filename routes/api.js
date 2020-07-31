const router = require("express").Router();
const Exercise = require("../models/exerciseModel.js");
const path = require("path");

//HTML ROUTES
router.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//API ROUTES

router.get("/api/workouts", (req, res) => {
	Exercise.find()
    .sort({ date: -1 })
    .then(dbExercise => {
			console.log(dbExercise);
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
	Exercise.findOne()
    //.sort({ date: -1 })
    .then(dbExercise => {
			console.log(dbExercise);
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/:id", (req, res) => {
	Exercise.find(
		{
			_id: req.params.id
		})
    .sort({ date: -1 })
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
});

router.post("/api/exercise", ({ body }, res) => {
  Exercise.create(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;

