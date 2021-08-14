const router = require("express").Router();
const fitnessRoutes = require("./fitnessRoutes");

router.use("/api/workouts", fitnessRoutes);

module.exports = router;
