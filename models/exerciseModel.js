const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema(
	{
		day: {
			type: Date,
			default: Date.now
			}, 

		//exercisesType:[],
		exercises: [
			{
				type: {
					type: String,
					trim: true
				},
				name:{
					type: String,
					trim: true
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
			}
		]
	},
{
	toJSON: {
		// include any virtual properties when data is requested
		virtuals: true
	}
});

// // adds a dynamically-created property to schema
// ExerciseSchema.virtual(“totalDuration”).get(function () {
//   // “reduce” array of exercises down to just the sum of their durations
//   return this.exercises.reduce((total, exercise) => {
//     return total + exercise.duration;
//   }, 0);
// });

//include collection name here
const Exercise = mongoose.model("exCollections", ExerciseSchema);
module.exports = Exercise;