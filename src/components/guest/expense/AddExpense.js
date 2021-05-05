import React from "react";
import { connect } from "react-redux";
import {createExpId, setExpName, setExpAmount, createExpDate, addExpense,} from "../../../actions/mainActions" 
import { v4 as uuidv4 } from "uuid";
import numeral from "numeral";

function AddExpense({
  guestMain: { expenseID, expenseName, expenseAmount, expenseDate },
  createExpId, setExpName, setExpAmount, createExpDate, addExpense,
}) {

  const onAddExpenseClick = () => {
    const id = uuidv4();
    const date = new Date();

    createExpId(id)
    createExpDate(date)

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
    <div className="">
      <form className="">
        <div style={{ marginBottom: "10px" }} className="form-group">
          <label className="labelText" htmlFor="expenseName">
            What is the name of your expense?
          </label>
          <input
            type="text"
            className="form-control"
            id="expenseName"
            aria-describedby="expenseName"
            placeholder="lodging, flight, shopping, etc"
            name="expenseName"
            value={expenseName}
            onChange={(event) => setExpName(event.target.value)}
          />
          <small
            id="nameRequired"
            // className={!expenseName ? "form-text text-danger" : "form-text text-muted"}
          >
            An expense name is required.
          </small>
        </div>
        <div className="form-group mt-4">
          <label className="labelText" htmlFor="expenseAmount">
            How much is the expense?
          </label>
          <input
            type="text"
            className="form-control"
            id="expenseAmount"
            placeholder="0.00"
            name="expenseAmount"
            value={expenseAmount}
            onChange={(event) => setExpAmount(event.target.value)}
          />
          <small
            id="amountRequired"
            // className={
            //   !numeral.validate(amount)
            //     ? "form-text text-danger"
            //     : "form-text text-muted"
            // }
          >
            A valid expense amount is required.
          </small>
        </div>
        <div className="">
          <button
            // type="button"
            // className={
            //   !numeral.validate(amount) || !name
            //     ? "btn btn-block btn-outline-secondary mt-2"
            //     : "btn btn-block btn-primary mt-2"
            // }
            onClick={onAddExpenseClick}
            disabled={!numeral.validate(expenseAmount) || !expenseName}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps, {createExpId, setExpName, setExpAmount, createExpDate, addExpense,})(AddExpense);
