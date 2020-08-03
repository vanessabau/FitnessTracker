//Dependencies
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
//Get all workouts
router.get("/api/workouts", (req, res) => {
	Exercise.find({})
    .then(dbExercise => {
			console.log("get /api/workouts" + dbExercise);
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Get a weeks worth of workouts for the Dashboard page
router.get("/api/workouts/range", (req, res) => {
	Exercise.find({})
		.sort({_id:1})
		.limit(7)
		.populate("exercises")
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Get workout by id used to get last workout
router.get("/api/workouts/:id", (req, res) => {
	Exercise.find(
		{
			_id: req.params.id
		})
    .then(dbExercise => {
			console.log("api line 51");
			console.log(dbExercise);
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Post NEW workout
router.post("/api/workouts", (req, res) => {
  Exercise.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// //Update last workout
router.put("/api/workouts", ({body}, res) => {
	Exercise.updateOne(body)
	.then(dbExercise =>{
		res.json(dbExercise);
	})
	.catch(err =>{
		res.json(err);
	});
});

// //Update workout by id
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Exercise.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


module.exports = router;

