import React from "react";
import { connect } from "react-redux";
import { addBudget } from "../../../actions/budgetActions";

import AddExpense from "../expense/AddExpense";
import ExpenseList from "../expense/ExpenseList";

function BudgetDetails({
  title,
  currency,
  budgetAmount,
  setBudgetAmount,
  balance,
  setBalance,
  expId,
  setExId,
  expenses,
  setExpenses,
  expName,
  setExpName,
  expAmount,
  setExpAmount,
  guestBudget,
  setGuestBudget,
}) {
  return (
    <div>
      <div>
        <h4 style={{ color: "black" }}>{title}</h4>
      </div>
      <div>
        <h5 style={{ color: "black" }}>
          Budget: {`${currency}${budgetAmount}`}
        </h5>
        <h5 style={{ color: "black" }}>
          Balance: {`${currency}${budgetAmount}`}
        </h5>
      </div>
      <div className="center-align" style={{ margin: "15px auto 50px auto " }}>
        <a
          href="#!"
          className="waves-effect waves-light btn-large modal-trigger"
        >
          <i className="material-icons left">save</i>Save and Exit
        </a>
      </div>
      <div className="row">
        <div className="col s6">
          <AddExpense
            expId={expId}
            setExId={setExId}
            expenses={expenses}
            setExpenses={setExpenses}
            expName={expName}
            setExpName={setExpName}
            expAmount={expAmount}
            setExpAmount={setExpAmount}
            guestBudget={guestBudget}
            setGuestBudget={setGuestBudget}
          />
        </div>
        <div className="col s6">
          {expenses.length > 0 && <ExpenseList />}
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addBudget })(BudgetDetails);