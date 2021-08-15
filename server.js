const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://mlward639:Rb7hOY5Vk0iQzMzE@cluster0.wr04p.mongodb.net/workout?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

// routes
app.use(require("./controllers/api"));

app.use(require("./controllers/homeroutes"));
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
