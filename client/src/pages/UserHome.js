import React from "react";
import Budgets from "../components/user/layout/Budgets";
import ComposeBudgetBtn from "../components/user/layout/UserComposeBudgetBtn";
import DeleteAllBudgetsBtn from "../components/user/layout/DeleteAllBudgetsBtn";
import GuestFilter from "../components/user/layout/GuestFilter";
import GuestLogo from "../components/user/layout/Logo";

function UserHome({ theme }) {
  return (
    <div>
      <GuestLogo theme={theme} />
      <GuestFilter />
      <ComposeBudgetBtn />
      <Budgets theme={theme} />
      <DeleteAllBudgetsBtn />
    </div>
  );
}

export default UserHome;
