import React from "react";
import { connect } from "react-redux";
import { addBudget } from "../../../actions/budgetActions";

import AddExpense from "../expense/AddExpense";
import ExpenseList from "../expense/ExpenseList";

function BudgetDetails({
  guestMain: { title, currency, budgetAmount, balance, expenses },
}) {
  return (
    <div>
      <div className="row">
        <div className="col s6">
          <h4 style={{ color: "black" }}>{title}</h4>
          <h6 style={{ color: "black" }}>
            Budget: {`${currency}${budgetAmount}`}
          </h6>
          <h6 style={{ color: "black" }}>Balance: {`${currency}${balance}`}</h6>
        </div>
        <div
          className="center-align col s6"
          style={{ margin: "15px auto 50px auto " }}
        >
          <a
            href="#!"
            className="waves-effect waves-light btn modal-trigger"
          >
            <i className="material-icons left">save</i>Save and Exit
          </a>
        </div>
      </div>
      <div className="row">
        <div className={expenses.length === 0 ? "center-align smallForm" : "col s4"}>
          <AddExpense />
        </div>
        <div className="col s8">{expenses.length > 0 && <ExpenseList />}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps, { addBudget })(BudgetDetails);
