const mongoose = require("mongoose");

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    day: {
        type: Date,
        defualt: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter an exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Please name your exercise"
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            duration: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        }
    ]
});

Workout.aggregate.addFields({

})

const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout