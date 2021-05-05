import React from "react";
import { connect } from "react-redux";
import {
  createExpId,
  setExpName,
  setExpAmount,
  createExpDate,
  addExpense,
} from "../../../actions/mainActions";
import { v4 as uuidv4 } from "uuid";
import numeral from "numeral";

function AddExpense({
  guestMain: { expenseID, expenseName, expenseAmount, expenseDate, currency },
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
    <div className="row">
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
            onFocus={(e) => (e.target.placeholder = "lodging, flight, shopping, etc")}
            // onBlur={(e) => (e.target.placeholder = "")}
            name="expenseName"
            value={expenseName}
            onChange={(event) => setExpName(event.target.value)}
          />
          <label htmlFor="expenseName">Expense Name</label>
        </div>

      {/* Expense Amount */}
      <div className="input-field">
          <h4 className="prefix teal-text center-align">
            {currency}
          </h4>
          <input
            type="text"
            className="validate"
            onFocus={(e) => (e.target.placeholder = "0.00")}
            // onBlur={(e) => (e.target.placeholder = "")}
            id="expenseAmount"
            name="expenseAmount"
            value={expenseAmount}
            onChange={(event) => setExpAmount(event.target.value)}

          />
          <label htmlFor="expenseAmount">Expense Amount</label>
        </div>


        {/* <div style={{ marginBottom: "15px" }} className="form-group">
          <label className="" htmlFor="expenseName">
            Expense Name
          </label>
          <input
            // style={{ width: "85%" }}
            type="text"
            className="form-control"
            id="expenseName"
            aria-describedby="expenseName"
            placeholder="lodging, flight, shopping, etc"
            name="expenseName"
            value={expenseName}
            onChange={(event) => setExpName(event.target.value)}
          /> */}
          {/* <small
            id="nameRequired"
            className={!expenseName ? "form-text text-danger" : "form-text text-muted"}
          >
            An expense name is required.
          </small> */}
        {/* </div> */}




        {/* <div className="form-group mt-4">
          <label className="labelText" htmlFor="expenseAmount">
            Expense Amount
          </label>
          <input
            // style={{ width: "85%" }}
            type="text"
            className="form-control"
            id="expenseAmount"
            placeholder="0.00"
            name="expenseAmount"
            value={expenseAmount}
            onChange={(event) => setExpAmount(event.target.value)}
          /> */}
          {/* <small
            id="amountRequired"
            className={
              !numeral.validate(amount)
                ? "form-text text-danger"
                : "form-text text-muted"
            }
          >
            A valid expense amount is required.
          </small> */}
        {/* </div> */}
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

export default connect(mapStateToProps, {
  createExpId,
  setExpName,
  setExpAmount,
  createExpDate,
  addExpense,
})(AddExpense);
