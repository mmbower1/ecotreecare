// express
const express = require('express');
const router = express.Router();
// middleware
const errorHandler = require('../middleware/error');
// models
const Review = require('../models/Review.js');
// npm's
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('config');
// const { check, validationResult } = require('express-validator');

// @route    GET /review
// @desc     Review page
// @access   Public
router.get('/', async (req, res) => {
  try {
    res.json('review');
  } catch (err) {
    res.status(500).send(err + ' Server error review');
  }
});

// @route    POST /review
// @desc     Landing page
// @access   Public
router.post('/', async (req, res) => {
  try {
    const { name, text } = req.body;
    // const reviewExists = await Review.findOne({ review });
    const review = await Review.create({
      name,
      text,
    });
    if (review) {
      res.status(201).json({
        _id: review._id,
        name: review.name,
        text: review.text
      });
    }
  } catch (err) {
    errorHandler(err, req, res)
    // res.status(500).send(err + ' Server error review');
  }
});

module.exports = router;