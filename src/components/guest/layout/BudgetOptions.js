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
    <div className="center-align">
    <a onClick={handleReset} href="#!" className="waves-effect waves-light btn-small"><i className="material-icons left red-text" style={{fontSize:"25px", marginRight:"3px"}}>restart_alt</i>reset</a>
    <a style={{marginLeft:"15px"}} href="#!" className="waves-effect waves-light btn-small"><i className="material-icons left" style={{fontSize:"25px", marginRight:"3px"}}>done</i>done</a>
    </div>
    </div>
  );
}

export default BudgetOptions;
