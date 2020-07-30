const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
	day: {
		type: Date,
		default: Date.now
	}, 
	exercisesType: {
				type: String,
				trim: true,
	},
	name: {
				type: String,
				trim: true,
	},
	duration: {
				type: Number
	},
	distance: {
				type: Number
	},
	weight: {
				type: Number
	},
	reps: {
				type: Number
	},
	sets: {
				type: Number
	}
});

const ExerciseSet = mongoose.model("ExerciseSet", ExerciseSchema);
module.exports = ExerciseSet;