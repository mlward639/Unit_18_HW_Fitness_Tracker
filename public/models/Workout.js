const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercise: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type of workout",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for workout",
      },
      weight: {
        type: Number,
        default: 0,
      },
      sets: {
        type: Number,
        default: 0,
      },
      reps: {
        type: Number,
        default: 0,
      },
      duration: {
        type: Number,
        required: "Enter a duration of exercise",
        default: 0,
      },
      distance: {
        type: Number,
        default: 0,
      },
    },
  ],
  totalDuration: {
    type: Number,
    default: 0,
  },
  totalWeight: {
    type: Number,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
