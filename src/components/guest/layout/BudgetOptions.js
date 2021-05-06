import React from "react";
import { useDispatch } from "react-redux";
import { clearBudget } from "../../../actions/mainActions";


function BudgetOptions() {
    const dispatch = useDispatch()

    const handleReset = () => {
        dispatch(clearBudget())
    }


  return (
    <div className="">
      <div style={{}} className="col s6">
        <a onClick={handleReset} href="#!" className="">
          <i
            style={{ fontSize: "30px" }}
            className="material-icons center-align red-text"
          >
            restart_alt
          </i>
          <p
            style={{ fontSize: "10px", marginTop: "0%", marginBottom: "0%" }}
            className="center-align black-text"
          >
            Reset
          </p>
        </a>
      </div>
      <div style={{ paddingRight: "0%" }} className="col s6">
        <a href="#!" className="">
          <i
            style={{ fontSize: "30px" }}
            className="material-icons center-align green-text lighten-3"
          >
            save
          </i>
          <p
            style={{ fontSize: "10px", marginTop: "0%", marginBottom: "0%" }}
            className="center-align black-text"
          >
            Save
          </p>
        </a>
      </div>
    </div>
  );
}

export default BudgetOptions;
