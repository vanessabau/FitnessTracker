const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema(
	{
		day: {
			type: Date,
			default: Date.now
			}, 

		exercises: [
			{
				type: {
					type: String,
					trim: true,
					required: "Enter exercise tag"
				},
				name:{
					type: String,
					trim: true,
					required: "Enter exercise name"
				},
				duration: {
					type: Number,
					required: "Enter exercise duration"
				},
				weight: {
					type: Number
				},
				reps: {
					type: Number
				},
				sets: {
					type: Number
				},
				distance: {
					type: Number
				}
			}
		]
	},
{
	toJSON: {
		// include any virtual properties when data is requested
		virtuals: true
	}
});

// adds a dynamically-created property to schema
ExerciseSchema.virtual("totalDuration").get(function () {
  // “reduce” array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

//include collection name here
const Exercise = mongoose.model("exCollections", ExerciseSchema);
module.exports = Exercise;