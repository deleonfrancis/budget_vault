import React from "react";
import AddExpense from "../expense/AddExpense";

function BudgetDetails({
  title,
  currency,
  budgetAmount,
  setBudgetAmount,
  balance,
  setBalance,
  expId,
  setExId,
  expenses,
  setExpenses,
  expName,
  setExpName,
  expAmount,
  setExpAmount,
  guestBudget,
  setGuestBudget,
}) {
  return (
    <div>
      <div>
        <h4 style={{ color: "black" }}>{title}</h4>
      </div>
      <div>
        <h5 style={{ color: "black" }}>
          Budget: {`${currency}${budgetAmount}`}
        </h5>
        <h5 style={{ color: "black" }}>
          Balance: {`${currency}${budgetAmount}`}
        </h5>
      </div>
      <AddExpense
        expId={expId}
        setExId={setExId}
        expenses={expenses}
        setExpenses={setExpenses}
        expName={expName}
        setExpName={setExpName}
        expAmount={expAmount}
        setExpAmount={setExpAmount}
        guestBudget={guestBudget}
        setGuestBudget={setGuestBudget}
      />
    </div>
  );
}

export default BudgetDetails;
