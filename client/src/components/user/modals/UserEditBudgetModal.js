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
import { useMediaQuery } from "react-responsive";
import ExpenseListMobile from "../expense/ExpenseListMobile";


function UserEditBudgetModal({
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
  const smallerThanIPad = useMediaQuery({ query: "(max-width: 767px)" });

  const dispatch = useDispatch();

  const handleShowModify = () => {
    dispatch(setShowModifyBudget(!showModifyBudget));
  };

  useEffect(() => {
    // getExpenses();

    const element = document.getElementById("userEditBudgetModal");
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
        // console.log("Close End");
        dispatch(clearBudget());
      },
      // inDuration: 250,
      // outDuration: 250,
      // opacity: 0.5,
      dismissible: true,
      // startingTop: "4%",
      // endingTop: "10%"
    };

    const tooltipElements = document.querySelectorAll('.tooltipped')
    const tooltipOptions = {}

    M.Modal.init(element, options);
    M.Tooltip.init(tooltipElements, tooltipOptions);


    if(balance<0){
      dispatch(setShowModifyBudget(true))
    }

    // eslint-disable-next-line
  }, [budget]);




  return (
    <div id="userEditBudgetModal" className="modal no-autoinit">
      <div className="modal-content">
        {/* <h4 className="teal-text">View/Edit</h4> */}
        <div className="row" style={{ marginBottom: "10px" }}>
          <div className="row" style={{ marginBottom: "0px" }}>
            <div className={showModifyBudget? "col s12 m6" : ""} 
                  style={!showModifyBudget?{width:"70%", margin:"auto"}:{}}>
              <EditTitle />
              <div>
                <h5 className="center-align" style={{ color: "black" }}>
                  Budget:{" "}
                  <span>
                    <a
                      onClick={handleShowModify}
                      href="#!"
                      className="black-text tooltipped"
                      data-position="bottom" data-tooltip="Modify Budget"
                    >
                      {`${currency}${numeral(budgetAmount).format("0,0.00")}`}
                      <i
                        style={{
                          fontSize: "25px",
                          position: "relative",
                          top: "3px",
                          left: "3px",
                        }}
                        className="material-icons center-align teal-text"
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
                <h4 className="red-text center-align">
                  Balance: {numeral(balance).format("0,0.00")}
                  {currency}
                </h4>
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
            {smallerThanIPad ? <div
              className={
                expenses.length === 0 ? "smallerDeviceForm " : "col s12 m5"
              }
            >
              <AddExpense />
            </div> : <div
              className={
                expenses.length === 0 ? "biggerDeviceForm " : "col s12 m5"
              }
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(UserEditBudgetModal);
