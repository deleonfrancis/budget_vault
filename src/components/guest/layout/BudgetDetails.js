import React from "react";
import { connect, useDispatch } from "react-redux";
import numeral from "numeral";
import { setShowModifyBudget } from "../../../actions/mainActions";

import ModifyBudget from "../budget/ModifyBudget";
import AddExpense from "../expense/AddExpense";
import ExpenseList from "../expense/ExpenseList";
import BudgetOptions from "./BudgetOptions";
import ExpenseListMobile from "../expense/ExpenseListMobile";

import { useMediaQuery } from "react-responsive";

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

  const smallerThanIPad = useMediaQuery({ query: "(max-width: 767px)" });

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
              <h5 className = "center-align" style={{ color: "black" }}>
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
              </h5>
            </div>

            {balance >= 0 && (
              <h5 className="black-text center-align">
                Balance:{" "}
                <span className="green-text">
                  {currency}
                  {numeral(balance).format("0,0.00")}
                </span>
              </h5>
            )}
            {balance < 0 && (
              <h4 className="red-text center-align" style={{ fontSize: "27px" }}>
                Balance: {numeral(balance).format("0,0.00")}
                {currency}
              </h4>
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
        {smallerThanIPad ? <div
              className={
                expenses.length === 0 ? "smallerDeviceForm " : "col s12 m5"
              }

              style={expenses.length === 0 ? {margin:"0px auto"}:{}}
            >
              <AddExpense />
            </div> : <div
              className={
                expenses.length === 0 ? "biggerDeviceForm " : "col s12 m5"
              }

              style={expenses.length === 0 ? {margin:"0px auto"}:{}}
            >
              <AddExpense />
            </div>}
          
          {!smallerThanIPad ? <div className="col s12 m7">
              {expenses.length > 0 && <ExpenseList />}
            </div>: <div className="col s12 m7">
              {expenses.length > 0 && <ExpenseListMobile />}
            </div>}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(BudgetDetails);
