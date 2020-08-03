//Dependencies
const mongoose = require("mongoose");

//Create new schema
const Schema = mongoose.Schema;

//Create model
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

//Adds a dynamically-created property to schema
ExerciseSchema.virtual("totalDuration").get(function () {
  // “reduce” array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

//Export model and include collection name (exCollections) here
const Exercise = mongoose.model("exCollections", ExerciseSchema);
module.exports = Exercise;