import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { loadUser } from "../actions/authActions";
import Budgets from "../components/user/layout/Budgets";
import ComposeBudgetBtn from "../components/user/layout/UserComposeBudgetBtn";
import DeleteAllBudgetsBtn from "../components/user/layout/DeleteAllBudgetsBtn";
import GuestFilter from "../components/user/layout/GuestFilter";
import GuestLogo from "../components/user/layout/Logo";
import LogOutBtn from "../components/user/layout/LogOutBtn";

function UserHome({ theme }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser());
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <GuestLogo theme={theme} />
      <LogOutBtn />
      <GuestFilter />
      <ComposeBudgetBtn />
      <Budgets theme={theme} />
      <DeleteAllBudgetsBtn />
    </div>
  );
}

const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
});

export default connect(mapStateToProps)(UserHome);
