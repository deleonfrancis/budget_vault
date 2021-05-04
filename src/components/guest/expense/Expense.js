import React from "react";
import numeral from "numeral";

function Expense({ expName, expAmount }) {
  return (
    <div className="row d-flex justify-content-between tList bg-white border m-2">
      <div className="col-lg-5 border-right center-text bg-white p-2 font-weight-bold">
        {expName}
      </div>
      <div className="col-lg-4 center-text bg-white p-2">
        {numeral(expAmount).format("$0,0.00")}
      </div>
      <div className="col-lg-3 border center-text d-flex justify-content-end bg-light">
        <button
          className="btn btn-lg btn-outline text-danger"
          type="button"
        //   onClick={onDeleteClick}
        >
         <i className="material-icons red-text">delete</i>
        </button>
      </div>
    </div>
  );
}

export default Expense;
