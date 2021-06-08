const mongoose = require("mongoose");

const BudgetSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", // name of the collection you want to refer to
  },

  title: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  budgetAmount: {
    type: Number,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  expenses: [
    {
      id: {
        type: String,
        required: false,
      },
      expName: {
        type: String,
        required: false,
      },
      expAmount: {
        type: Number,
        required: false,
      },
      expNote: {
        type: String,
        required: false,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  note: {
    type: String,
    required: false,
  },
  dateUpdated: {
    type: Date,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("budget", BudgetSchema);
