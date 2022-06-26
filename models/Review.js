const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    text: {
      type: String,
      // required: true,
    },
    rating: {
      type: Number,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
