import React from "react";
import numeral from "numeral";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../../actions/mainActions";
import Moment from "react-moment";

function ExpenseItemMobile({ expense, currency }) {
  const dispatch = useDispatch();

  const { expName, expAmount, date } = expense;

  const handleClick = () => {
    dispatch(deleteExpense(expense));
  };

  return (
    <div className="row">
    <div className="col s12">
      <div className="card teal lighten-5">
        <div className="card-content white-text" style={{padding: "8px 12px"}}>
          <span className="card-title black-text">{expName}</span>
          <p style={{margin:"0px 0px 8px"}} className="black-text">Expense Amount: {" "}{currency}
        {numeral(expAmount).format('0,0.00')}</p>
        <p className="teal-text">Date Created: <Moment style={{ color: "teal" }} format="MM/DD/YY">
          {date}
        </Moment></p>
        </div>
        <div className="card-action" style={{padding: "8px 12px"}}>
          <a href="!#" onClick={handleClick}><i className="material-icons red-text">delete</i></a>
        </div>
      </div>
    </div>
  </div>
    
  );
}

export default ExpenseItemMobile;
