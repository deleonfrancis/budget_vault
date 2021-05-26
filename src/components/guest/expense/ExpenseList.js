import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ guestMain: { expenses, currency } }) {
  // console.log("ExpenseList:");
  // console.log(expenses);

  return (
    <div id="expensesList"  className="z-depth-2 grey lighten-5" style={{margin: "5px 25px", padding:"15px"}}>
      <h5 style={{marginBottom:"20px"}} className="teal-text center-align">Expense List</h5>
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
