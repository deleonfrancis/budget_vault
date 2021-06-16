import React from "react";
import { useDispatch } from "react-redux";
import {logoutUser} from "../../../actions/authActions"
import {clearBudget} from "../../../actions/userMainActions"

function LogOutBtn() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser());
    dispatch(clearBudget());
  };

  return (
    <button onClick={onLogout} className="btn mt-3 logoutBtn">
      <i className="fas fa-sign-out-alt"> Logout</i>
    </button>
  );
}

export default LogOutBtn;
