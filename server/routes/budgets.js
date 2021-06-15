const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const auth = require("../middleware/auth");

const User = require("../models/User");
const Budget = require("../models/Budget");

// get user's budgets. Private access
router.get("/", auth, async (req, res) => {
  try {
    console.log(req.user.id)
    const budgets = await Budget.find({ user: req.user.id }).sort({ date: -1 });
    console.log(budgets)
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
router.put("/:id", auth, async (req, res) => {
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

  // Build a budget object
  const budgetFields = {};

  if (title) budgetFields.title = title;
  if (currency) budgetFields.currency = currency;
  if (budgetAmount) budgetFields.budgetAmount = budgetAmount;
  if (balance) budgetFields.balance = balance;
  if (expenses) budgetFields.expenses = expenses;
  if (note) budgetFields.note = note;
  if (dateUpdated) budgetFields.dateUpdated = dateUpdated;
  if (dateCreated) budgetFields.dateCreated = dateCreated;

  try {
    let budget = await Budget.findById(req.params.id);
    if (!budget) return res.status(404).json({ msg: "Budget not found" });

    // make sure user owns the budget
    if (budget.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not Authorized." });

    //   Update the Budget
    budget = await Budget.findByIdAndUpdate(
      req.params.id,
      { $set: budgetFields },
      { new: true }
    );

    res.json(budget);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

// auth user and get token. private access
router.delete("/:id", auth, async (req, res) => {
  try {
    let budget = await Budget.findById(req.params.id);
    if (!budget) return res.status(404).json({ msg: "Budget not found." });

    // make sure user owns the budget
    if (budget.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not Authorized." });

    //   Delete the budget
    budget = await Budget.findByIdAndRemove(req.params.id);
    res.json({ msg: "Note removed." });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error.");
  }
});

module.exports = router;
