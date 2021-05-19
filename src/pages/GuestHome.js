import React from "react";
import AboutTrigger from "../components/guest/layout/AboutTrigger";
import Budgets from "../components/guest/layout/Budgets";
import ComposeBudgetBtn from "../components/guest/layout/ComposeBudgetBtn";
import DeleteAllBudgetsBtn from "../components/guest/layout/DeleteAllBudgetsBtn";
import GuestFilter from "../components/guest/layout/GuestFilter";
import GuestLogo from "../components/guest/layout/GuestLogo";

function GuestHome({ theme }) {
  return (
    <div>
      <GuestLogo />
      <AboutTrigger theme={theme} />
      <GuestFilter theme={theme} />
      <ComposeBudgetBtn />
      <Budgets theme={theme} />
      <DeleteAllBudgetsBtn />
    </div>
  );
}

export default GuestHome;
