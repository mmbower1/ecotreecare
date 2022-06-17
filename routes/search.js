// express
const express = require("express");
const router = express.Router();
// middleware
// const auth = require('../middleware/auth');
// mongo
const Tree = require("../models/Tree");
// npm's
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('config');
// const { check, validationResult } = require('express-validator');

// @route    GET /homepage
// @desc     Landing page
// @access   Public
router.get("/", async (req, res) => {
  try {
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const trees = await Tree.find({ ...keyword });
    res.json({ trees });
  } catch (err) {
    res.status(500).send(err + " Server error search");
  }
});

module.exports = router;
