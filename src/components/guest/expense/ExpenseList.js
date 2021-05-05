import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ guestMain: { expenses, currency } }) {
  // console.log(expenses);
  return (
    <div id="expensesList">
      <table className="highlight">
        <thead>
          <tr style={{color:"black"}}>
            <th style={{marginBottom: "0%", paddingTop: "0px", paddingBottom: "2px"}}>Name</th>
            <th style={{marginBottom: "0%", paddingTop: "0px", paddingBottom: "2px"}}>Amount</th>
            <th style={{marginBottom: "0%", paddingTop: "0px", paddingBottom: "2px"}}>Date</th>
            <th style={{marginBottom: "0%", paddingTop: "0px", paddingBottom: "2px"}} className="center-align">Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <ExpenseItem key={exp.id} expense={exp} currency={currency} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(ExpenseList);
