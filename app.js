const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/musicAppDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const discographySchema = new mongoose.Schema({
  artistName: String,
  collabArtistsName: String,
  projectTitle: String,
  projectType: String,
  releaseDate: Date,
  numberOfTracks: Number,
  duration: Date,
  rating: Number,
  peakChartPosition: Number,
  firstWeekSales: Number,
  certificates: String,
  label: String,
  producers: String,
});
const artistSchema = new mongoose.Schema({
  artistName: String,
  firstName: String,
  lastName: String,
  birthDate: Date,
  dateSigned: Date,
  contract: String,
  discography: discographySchema,
  netWorth: Number,
  monthlyListeners: Number,
  origin: String,
  occupations: String,
});

const Discography = mongoose.model("Discography", discographySchema);
const Artist = mongoose.model("Artist", artistSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
