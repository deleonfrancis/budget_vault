const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const User = require("../models/User");

// Register a user. Public access
router.post(
  "/",
  // username must have a fist name
  body("firstName", "A first name is required.").not().isEmpty(),
  // username must have a last name
  body("lastName", "A last name is required.").not().isEmpty(),
  // username must be an email
  body("email", "A valid email is required.").isEmail(),
  // password must be at least 6 chars long
  body("password", "Password of 6 or more characters is required.").isLength({
    min: 6,
  }),
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // returns a 'Bad Request' 400 code and an array of errors.
        return res.status(400).json({ errors: errors.array() });
      }

    res.send(req.body);
  }
);

module.exports = router;
