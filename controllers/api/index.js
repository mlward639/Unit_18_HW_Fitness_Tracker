const router = require("express").Router();
const fitnessRoutes = require("./fitnessRoutes");

router.use("/workouts", fitnessRoutes);

module.exports = router;
