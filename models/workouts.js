const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
    //add property of day, type date
    {   
        day: {
            type: Date,
            default: Date.now
            //add property of exercise, type array
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Add Your Exercise"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Select Exercise Type"
                },
                duration: {
                    type: Number,
                    required: "Enter an exercise duration in minutes"
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
    }
)


module.exports = mongoose.model("workout", workoutSchema);