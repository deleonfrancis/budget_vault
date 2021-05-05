import React from "react";
import Moment from "react-moment";
// import numeral from "numeral";

function ExpenseItem({ expense, currency }) {
  const { expName, expAmount, date } = expense;
  console.log(expense);

  return (
    <div className="row">
      <div style={{ color: "teal" }} className="">
        Name: {expName}
      </div>
      <div style={{ color: "teal" }} className="">
        Amount: {currency}
        {expAmount}
      </div>
      <Moment style={{ color: "teal" }} format="MMMM Do YYYY, h:mm:ss a">
        {date}
      </Moment>

      {/* <div>{date}</div> */}
      <div className="">
        <button
          className=""
          type=""
          //   onClick={onDeleteClick}
        >
          <i className="material-icons red-text">delete</i>
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
