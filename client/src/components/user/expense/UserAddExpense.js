import React from "react";
import { connect } from "react-redux";
import {
  createExpId,
  setExpName,
  setExpAmount,
  createExpDate,
  addExpense,
} from "../../../actions/userMainActions";
import { v4 as uuidv4 } from "uuid";
import numeral from "numeral";

function UserAddExpense({
  userMain: { expenseID, expenseName, expenseAmount, expenseDate, currency, balance, expenses, budget },
  createExpId,
  setExpName,
  setExpAmount,
  createExpDate,
  addExpense,
}) {
  const onAddExpenseClick = () => {
    const id = uuidv4();
    const date = new Date();

    createExpId(id);
    createExpDate(date);

    const expense = {
      id: id,
      expName: expenseName,
      expAmount: numeral(expenseAmount).value(),
      date: date,
    };

    addExpense(expense);
    // console.log(expense);
    setExpName("");
    setExpAmount("");
  };

  return (
    <div className="row z-depth-2 teal lighten-5" style={{margin:"5px", padding:"15px"}}>
      <h5 className="teal-text center-align">Add Expense</h5>
      <form className="">
        {/* Expense Name */}
        <div className="input-field">
          <i className="material-icons prefix center-align teal-text">
            drive_file_rename_outline
          </i>
          <input
            id="expenseName"
            type="text"
            className="validate"
            name="expenseName"
            placeholder="lodging, flight, shopping, etc"
            value={expenseName}
            onChange={(event) => setExpName(event.target.value)}
          />
          <span className="helper-text left-align"> Expense Name </span>
        </div>

        {/* Expense Amount */}
        <div className="input-field">
          <h4 className="prefix teal-text center-align">{currency}</h4>
          <input
            type="text"
            className="validate"
            placeholder = "0.00"
            id="expenseAmount"
            name="expenseAmount"
            value={expenseAmount}
            onChange={(event) => setExpAmount(event.target.value)}
          />
          
          <span className="helper-text left-align"> Expense Amount </span>
        </div>

        {/* Confirm button */}
        <div className="">
          <button
            className={balance >= 0 ? "btn green waves-effect waves-light": "btn red waves-effect waves-light"}
            type="submit"
            name="action"
            onClick={onAddExpenseClick}
            disabled={!numeral.validate(expenseAmount) || !expenseName}
          >
            Confirm
            <i className="material-icons right">send</i>
          </button>
          {balance < 0 && <div> <p style={{fontStyle:"italic", margin:"3px", fontSize:"12px"}} className="red-text">Your balance is in the red.</p> 
          <p style={{margin:"3px", fontSize:"12px"}} className="grey-text text-darken-1">Please modify your budget or delete an expense.</p> </div> }
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userMain: state.userMain,
});

export default connect(mapStateToProps, {
  createExpId,
  setExpName,
  setExpAmount,
  createExpDate,
  addExpense,
})(UserAddExpense);
