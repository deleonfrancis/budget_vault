import React from "react";
import { connect } from "react-redux";
import ExpenseItemMobile from "./ExpenseItemMobile";

function ExpenseListMobile({ guestMain: { expenses, currency } }) {
  // console.log("ExpenseList:");
  // console.log(expenses);

  return (
    <div id="expensesListMobile"  className="z-depth-2 grey lighten-5" style={{margin: "5px 25px", padding:"15px"}}>
      <h5 style={{marginBottom:"20px"}} className="teal-text center-align">Expense List</h5>
          {expenses.map((exp) => (
            <ExpenseItemMobile key={exp.id} expense={exp} currency={currency} />
          ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(ExpenseListMobile);
