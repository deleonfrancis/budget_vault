import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { clearBudget, setShowModifyBudget } from "../../../actions/mainActions";
import numeral from "numeral";
import ModifyBudget from "../budget/ModifyBudget";
import AddExpense from "../expense/AddExpense";
import ExpenseList from "../expense/ExpenseList";
import EditTitle from "../layout/EditTitle";
import EditBudgetOptions from "../layout/EditBudgetOptions";
import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";

function EditBudgetModal({ guestMain: { budget, showModifyBudget, budgetAmount, balance, title, currency,
    expenses } }) {
  const dispatch = useDispatch();

  const handleShowModify = () => {
    dispatch(setShowModifyBudget(!showModifyBudget));
  };


  useEffect(() => {
    getExpenses();

    const element = document.getElementById('editBudgetModal')

    const options = {
        // onOpenStart: () => {
        //   console.log("Open Start");
        // },
        // onOpenEnd: () => {
        //   console.log("Open End");
        // },
        // onCloseStart: () => {
        //   console.log("Close Start");
        // },
        onCloseEnd: () => {
          console.log("Close End");
          dispatch(clearBudget())
        },
        // inDuration: 250,
        // outDuration: 250,
        // opacity: 0.5,
        dismissible: true,
        // startingTop: "4%",
        // endingTop: "10%"
      };

M.Modal.init(element, options )

    // eslint-disable-next-line    
  }, [budget]);

  const [userExpenses, setUserExpenses] = useState([]);
  // setUserExpenses(expenses)

  const getExpenses = () => {
    if (!expenses) {
      return null;
    } else {
      setUserExpenses(expenses);
    //   console.log("getExpenses:");
    //   console.log(expenses);
    //   console.log(userExpenses);
    }
  };

  return (
    <div id="editBudgetModal" className="modal no-autoinit" style={modalStyle}>
      <div className="modal-content">
        <h4 className="teal-text">View/Update</h4>
        <div className="row" style={{ marginBottom: "10px" }}>
          <div className="row" style={{ marginBottom: "0px" }}>
            <div className="col s6">
            <EditTitle />
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
                        className="material-icons center-align teal-text"
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
           <EditBudgetOptions />
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
