import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { clearBudget, setShowModifyBudget } from "../../../actions/mainActions";
import numeral from "numeral";
import ModifyBudget from "../budget/ModifyBudget";
import AddExpense from "../expense/AddExpense";
import ExpenseList from "../expense/ExpenseList";
import EditTitle from "../layout/EditTitle";
import EditBudgetOptions from "../layout/EditBudgetOptions";
import M from "materialize-css";
import Moment from "react-moment";

function EditBudgetModal({
  guestMain: {
    budget,
    showModifyBudget,
    budgetAmount,
    balance,
    dateCreated,
    dateUpdated,
    currency,
    expenses,
  },
}) {
  const dispatch = useDispatch();

  const handleShowModify = () => {
    dispatch(setShowModifyBudget(!showModifyBudget));
  };

  useEffect(() => {
    // getExpenses();

    const element = document.getElementById("editBudgetModal");

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
        dispatch(clearBudget());
      },
      // inDuration: 250,
      // outDuration: 250,
      // opacity: 0.5,
      dismissible: true,
      // startingTop: "4%",
      // endingTop: "10%"
    };

    M.Modal.init(element, options);

    if(balance<0){
      dispatch(setShowModifyBudget(true))
    }

    // eslint-disable-next-line
  }, [budget]);




  return (
    <div id="editBudgetModal" className="modal no-autoinit">
      <div className="modal-content">
        <h5 className="teal-text">View/Edit</h5>
        <div className="row" style={{ marginBottom: "10px" }}>
          <div className="row" style={{ marginBottom: "0px" }}>
            <div className={showModifyBudget? "col s12 m6" : ""} 
                  style={!showModifyBudget?{width:"70%", margin:"auto"}:{}}>
              <EditTitle />
              <div>
                <h6 className="center-align" style={{ color: "black" }}>
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
                <h6 className="black-text center-align">
                  Balance:{" "}
                  <span className="green-text">
                    {currency}
                    {numeral(balance).format("0,0.00")}
                  </span>
                </h6>
              )}
              {balance < 0 && (
                <h6 className="red-text center-align" style={{ fontSize: "27px" }}>
                  Balance: {numeral(balance).format("0,0.00")}
                  {currency}
                </h6>
              )}
            </div>
            <div style={{ marginBottom: "10px" }} className="col s12 m6">
              {(showModifyBudget) && <ModifyBudget />}
            </div>
          </div>

          <div
            className="row"
            style={{ margin: "20px auto 15px auto", padding: "0%" }}
          >
            <EditBudgetOptions />
          </div>
          <div
            className="row"
            style={{ margin: "5px auto 30px auto", padding: "0%" }}
          >
            <p className="black-text center-align" style={{ margin: "0px" }}>
              Date Created:{" "}
              {
                <Moment style={{ color: "teal" }} format="MMMM Do YYYY, h:mm a">
                  {dateCreated}
                </Moment>
              }
            </p>
          </div>

          <div className="row">
            <div
              className={
                expenses.length === 0 ? "center-align smallForm" : "col s12 m5"
              }
            >
              <AddExpense />
            </div>
            <div className="col s12 m7">
              {expenses.length > 0 && <ExpenseList />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(EditBudgetModal);
