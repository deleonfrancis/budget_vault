import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import { randomColor } from "../../utils/randomColorGen";
import numeral from "numeral";

function AddExpense({
  // expId,
  // setExId,
  // expense,
  setExpense,
  // expenses,
  // setExpenses,
  // expName,
  // setExpName,
  // expAmount,
  // setExpAmount,
  // guestBudget,
  // setGuestBudget,
}) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const onAddExpenseClick = () => {
    const id = uuidv4();

    const expense = {
      id: id,
      expName: name,
      expAmount: numeral(amount).value(),
      date: new Date(),
    };

    setExpense(expense);
    setName("");
    setAmount("");
  };

  return (
    <div className="">
      <form className="">
          <div style={{marginBottom:"10px"}} className="form-group">
            <label className="labelText" htmlFor="expenseName">
              What is the name of your expense?
            </label>
            <input
              type="text"
              className="form-control"
              id="expenseName"
              aria-describedby="expenseName"
              placeholder="lodging, flight, shopping, etc"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <small id="nameRequired" className={!name ? "form-text text-danger" : "form-text text-muted"}>
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
              name="amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
            <small id="amountRequired" className= {!numeral.validate(amount) ? "form-text text-danger" : "form-text text-muted"} >
              A valid expense amount is required.
            </small>
          </div>
          <div className="">
            <button
              // type="button"
              className={
                !numeral.validate(amount) || !name
                  ? "btn btn-block btn-outline-secondary mt-2"
                  : "btn btn-block btn-primary mt-2"
              }
              onClick={onAddExpenseClick}
              disabled={!numeral.validate(amount) || !name}
            >
              Confirm
            </button>
          </div>
        </form>
    </div>
  );
}

export default AddExpense;
