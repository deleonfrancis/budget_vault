import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { setShowModifyBudget } from "../../../actions/mainActions";
import numeral from "numeral";
import ModifyBudget from "../budget/ModifyBudget";
import BudgetOptions from "../layout/BudgetOptions";
import AddExpense from "../expense/AddExpense";
import ExpenseList from "../expense/ExpenseList";
import ExpenseItem from "../expense/ExpenseItem";

function EditBudgetModal({ guestMain: { budget, showModifyBudget } }) {
  const dispatch = useDispatch();

  const handleShowModify = () => {
    dispatch(setShowModifyBudget(!showModifyBudget));
  };

  const {
    title,
    currency,
    expenses,
    // dateUpdated,
    balance,
    budgetAmount,
  } = budget;
  // console.log("EditBudgetModal:");
  // console.log(budget);
  // console.log(expenses);

  useEffect(() => {
    getExpenses();
    // eslint-disable-next-line
  }, [budget]);

  const [userExpenses, setUserExpenses] = useState([]);
  // setUserExpenses(expenses)

  const getExpenses = () => {
    if (!expenses) {
      return null;
    } else {
      setUserExpenses(expenses);
      console.log("getExpenses:");
      console.log(expenses);
      console.log(userExpenses);
    }
  };

  return (
    <div id="editBudgetModal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4 className="teal-text">View/Update "{title}"</h4>
        <div className="row" style={{ marginBottom: "10px" }}>
          <div className="row" style={{ marginBottom: "0px" }}>
            <div className="col s6">
              <h5 className="teal-text">{title}</h5>
              <div>
                <h6 style={{ color: "black" }}>
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
                <h6 className="black-text">
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
            <div style={{ marginBottom: "10px" }} className="col s6">
              {(showModifyBudget || balance < 0) && <ModifyBudget />}
            </div>
          </div>

          <div
            className="row"
            style={{ margin: "15px auto 30px auto", padding: "0%" }}
          >
            {/* <BudgetOptions /> */}
          </div>
          <div className="row">
            <div
              className={
                userExpenses.length === 0 ? "center-align smallForm" : "col s5"
              }
            >
              <AddExpense />
            </div>
            <div className="col m1"></div>
            <div style={{ width: "45%" }} className="col s6">
              {userExpenses.length > 0 && <ExpenseList />}
            </div>
            {/* <div style={{ width: "45%" }} className="col s6">
              {userExpenses.length > 0 && (
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
            </table>)}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
const modalStyle = {
  width: "95%",
  height: "100%",
};

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(EditBudgetModal);
