import React from "react";
import { connect, useDispatch } from "react-redux";
import numeral from "numeral";
import { setShowModifyBudget } from "../../../actions/mainActions";
import ModifyBudget from "../budget/ModifyBudget";

import AddExpense from "../expense/AddExpense";
import ExpenseList from "../expense/ExpenseList";
import BudgetOptions from "./BudgetOptions";

function BudgetDetails({
  guestMain: {
    title,
    currency,
    budgetAmount,
    balance,
    expenses,
    showModifyBudget,
  },
}) {
  const dispatch = useDispatch();

  const handleShowModify = () => {
    dispatch(setShowModifyBudget(!showModifyBudget));
  };

  return (
    <div>
      <div className="row" style={{ marginBottom: "10px" }}>
        <div className="row" style={{ marginBottom: "0px" }}>
          <div className="col s12 m6">
            <h5 className="teal-text">{title}</h5>
            <div>
              <h6 className = "center-align" style={{ color: "black" }}>
                Budget:{" "}
                <span>
                  <a
                    onClick={handleShowModify}
                    href="#!"
                    className="black-text"
                  >
                    {`${currency}${numeral(budgetAmount).format("0,0.00")}`}
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
                  </a>
                </span>
              </h6>
            </div>

            {balance >= 0 && (
              <h6 className="black-text center-align">
                Balance:{" "}
                <span className="green-text">
                  {currency}
                  {numeral(balance).format("0,0.00")}
                </span>
              </h6>
            )}
            {balance < 0 && (
              <h6 className="red-text" style={{ fontSize: "27px" }}>
                Balance: {numeral(balance).format("0,0.00")}
                {currency}
              </h6>
            )}
          </div>
          <div style={{marginBottom:"10px"}} className="col s12 m6">
            {(showModifyBudget || balance < 0) && <ModifyBudget />}
          </div>
        </div>

        <div
          className="row"
          style={{ margin: "15px auto 30px auto", padding: "0%" }}
        >
          <BudgetOptions />
        </div>
        <div className="row">
          <div
            className={
              expenses.length === 0 ? "center-align smallForm" : "col s12 m5"
            }
          >
            <AddExpense />
          </div>
          <div className="col m1"></div>
          <div style={{ width: "45%" }} className="col s12 m6">
            {expenses.length > 0 && <ExpenseList />}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(BudgetDetails);
