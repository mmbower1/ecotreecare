// express
const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator");

// middleware
const errorHandler = require("../middleware/error");

// models
const Review = require("../models/Review.js");
// npm's
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('config');
// const { check, validationResult } = require('express-validator');

// @route    GET /review
// @desc     Review page
// @access   Public
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.json({ reviews });
  } catch (err) {
    res.status(500).send(err + " Server error review");
  }
});

// @route    POST /review
// @desc     Creates a new review
// @access   Public
router.post("/", async (req, res) => {
  try {
    const { name, text, rating, date } = req.body;
    // const reviewExists = await Review.findOne({ review });
    const review = await Review.create({
      name,
      text,
      rating,
      date,
    });
    if (review) {
      res.status(201).json({
        _id: review._id,
        name: review.name,
        text: review.text,
        rating: review.rating,
        date: review.date,
      });
    }
  } catch (err) {
    errorHandler(err, req, res);
    res.status(500).send(err + " Server error review");
  }
});

module.exports = router;
