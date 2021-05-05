import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({guestMain: {expenses, expense, currency}}) {
console.log(expenses);
  return (
    <div>{expenses.map((exp) => <ExpenseItem key={exp.id} expense={exp} currency={currency} /> )
    }
      <div style={{ color: "teal" }}>Expense List</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
})

export default connect(mapStateToProps)(ExpenseList);
