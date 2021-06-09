import React from "react";
import numeral from "numeral";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../../actions/mainActions";
import Moment from "react-moment";

function UserExpenseItem({ expense, currency }) {
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
        {numeral(expAmount).format('0,0.00')}
      </td>
      <td>
        <Moment style={{ color: "teal" }} format="MM/DD/YY">
          {date}
        </Moment>
      </td>
      <td className="center-align">
        <a onClick={handleClick} href="#!" className="tooltipped"
        data-position="bottom" data-tooltip={`Delete "${expName}"`}
        >
          <i className="material-icons red-text">delete</i>
        </a>
      </td>
    </tr>
  );
}

export default UserExpenseItem;
