const router = require("express").Router();
const db = require("../../public/models");

// POST a new workout
router.post("/workouts", ({ body }, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GET last workout
router.get("/", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      //can add function for total duration here ***
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//add exercise to workout
router.put("/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        exercises: req.body,
      },
      //add something to update totals for exercise
    },
    {
      new: true,
    }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//// get workouts in range
router.get("/range", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
