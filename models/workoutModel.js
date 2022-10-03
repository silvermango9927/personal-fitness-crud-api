const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: false,
    },
    load: {
      type: Number,
      required: false,
    },
    time: {
      type: Number,
      required: true,
    },
    distance: {
      type: Number,
      required: false,
    },
    difficulty: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
