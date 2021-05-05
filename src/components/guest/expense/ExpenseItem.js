import React from "react";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../../actions/mainActions";
import Moment from "react-moment";
// import numeral from "numeral";

function ExpenseItem({ expense, currency }) {
  const dispatch = useDispatch();

  const { expName, expAmount, date } = expense;

  const handleClick = () => {
    dispatch(deleteExpense(expense));
  };

  return (
    <tr className="hoverable">
      <td style={{ color: "teal" }} className="">
        {expName}
      </td>
      <td style={{ color: "teal" }} className="">
        {currency}
        {expAmount}
      </td>
      <td>
        <Moment style={{ color: "teal" }} format="MMMM Do YYYY">
          {date}
        </Moment>
      </td>
      <td className="center-align">
        <a onClick={handleClick} href="#!" className="">
          <i className="material-icons red-text">delete</i>
        </a>
      </td>
    </tr>
  );
}

export default ExpenseItem;
