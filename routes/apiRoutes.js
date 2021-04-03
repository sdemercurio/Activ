const router = require("express").Router();
const Workout = require("../models/workouts.js");

router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find().limit(7)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,
        { "$push": { "exercises": req.body } })
        .then(dbWorkouts => {
            res.json(dbWorkouts)
        })
        .catch(err => {
            res.json(err);
        })

})

module.exports = router;