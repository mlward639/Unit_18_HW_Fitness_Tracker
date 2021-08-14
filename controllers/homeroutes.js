const router = require("express").Router();
const path = require("path");

// const { Workout } = require("../public/models/Workout");

// Get HOMEPAGE
router.get("/", (req, res) => {
  res.sendFile("/index.html");
});

module.exports = router;
