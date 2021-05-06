import React from "react";
import { connect, useDispatch } from "react-redux";
import { setShowModifyBudget } from "../../../actions/mainActions";
import ModifyBudget from "../budget/ModifyBudget";

import AddExpense from "../expense/AddExpense";
import ExpenseList from "../expense/ExpenseList";
import BudgetOptions from "./BudgetOptions";

function BudgetDetails({
  guestMain: { title, currency, budgetAmount, balance, expenses, showModifyBudget, },
}) {
  const dispatch = useDispatch();

  const handleShowModify = () => {
    dispatch(setShowModifyBudget(!showModifyBudget));
  };

  return (
    <div>
      <div className="row" style={{ marginBottom: "50px" }}>
        <div className="col m4">
          <h5 className="teal-text">{title}</h5>
          <div>
            <a onClick={handleShowModify} href="#!" className="">
              <h6 style={{ color: "black" }}>
                Budget: {`${currency}${budgetAmount}`}
                <i
                  style={{
                    fontSize: "17px",
                    position: "relative",
                    top: "2px",
                    left: "3px",
                  }}
                  className="material-icons center-align  teal-text"
                >
                  edit
                </i>
              </h6>
            </a>
          </div>

          {balance >= 0 && (
            <h6 className="black-text">
              Balance:{" "}
              <span className="green-text">
                {currency}
                {balance}
              </span>
            </h6>
          )}
          {balance < 0 && (
            <h6 className="red-text" style={{ fontSize: "27px" }}>
              Balance: {balance}
              {currency}
            </h6>
          )}
        </div>
        <div className="col s5">
          {(showModifyBudget || balance < 0) && <ModifyBudget />}
        </div>

        <div
          className="center-align col m3"
          style={{ margin: "15px auto 50px auto", padding: "0%" }}
        >
          <BudgetOptions />
        </div>
      </div>
      <div className="row">
        <div
          className={
            expenses.length === 0 ? "center-align smallForm" : "col s5"
          }
        >
          <AddExpense />
        </div>
        <div className="col m1"></div>
        <div style={{ width: "45%" }} className="col s6">
          {expenses.length > 0 && <ExpenseList />}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(BudgetDetails);
