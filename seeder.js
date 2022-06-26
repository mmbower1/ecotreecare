const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
// data
const reviews = require("./data/Reviews.js");
const trees = require("./data/Trees.js");
// load env vars
dotenv.config({ path: "./config/config.env" });
// load models
const Review = require("./models/Review");
const Tree = require("./models/Tree");
// const User = require("./models/User");
// mongo
const connectDB = require("./config/db.js");

dotenv.config({ path: "./config/config.env" });

connectDB();

// import into mongo
const importData = async () => {
  try {
    await Review.deleteMany();
    await Tree.deleteMany();

    await Tree.insertMany(trees);
    await Review.insertMany(reviews);
    console.log("Data imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// delete data from mongo
const deleteData = async () => {
  try {
    await Review.deleteMany();
    await Tree.deleteMany();
    console.log("Data destroyed...".red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// type into terminal 'node seeder -i' to run
if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
