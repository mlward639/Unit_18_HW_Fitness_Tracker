const router = require("express").Router();
const path = require("path");

// const { Workout } = require("../public/models/Workout");

// Get HOMEPAGE
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//get EXERCISE page to log exercises to workouts
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//get STATS page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
