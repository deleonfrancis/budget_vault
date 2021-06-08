const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const auth = require("../middleware/auth");

const User = require("../models/User");
const Budget = require("../models/Budget");

// get user's budgets. Private access
router.get("/", auth, async (req, res) => {
  try {
    const budgets = await Budget.find({ user: req.user.id }).sort({ date: -1 });
    res.json(budgets);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error.");
  }
});

// add a new budget private access
router.post("/", auth, async (req, res) => {
  const {
    title,
    currency,
    budgetAmount,
    balance,
    expenses,
    note,
    dateUpdated,
    dateCreated,
  } = req.body;
  try {
    const newBudget = new Budget({
      user: req.user.id,
      title,
      currency,
      budgetAmount,
      balance,
      expenses,
      note,
      dateUpdated,
      dateCreated,
    });

    const budget = await newBudget.save();
    res.json(budget);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error.");
  }
});

// update budget. private access
router.put("/:id", (req, res) => {
  res.send("update budget");
});

// auth user and get token. private access
router.delete("/:id", (req, res) => {
  res.send("delete budget");
});

module.exports = router;
