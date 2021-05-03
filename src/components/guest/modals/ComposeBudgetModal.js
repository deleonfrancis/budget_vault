import React, { useState } from "react";
import AskBudgetGuest from "../budget/AskBudgetGuest";
import BudgetDetails from "../layout/BudgetDetails";

function ComposeBudgetModal() {
  const [title, setTitle] = useState("");
  const [currency, setCurrency] = useState("");
  const [budgetAmount, setBudgetAmount] = useState(0);
  // const [balance, setBalance] = useState(budgetAmount);
  // const [expenses, setExpenses] = useState([]);
  // const [expName, setExpName] = useState("");
  // const [expAmount, setExpAmount] = useState(0);
  // const [guestBudget, setGuestBudget] = useState(null);

  console.log(`${title}, ${currency}${budgetAmount}`);

  return (
    <div id="composeBudget" className="modal">
      <div className="modal-content">
        {!budgetAmount && (
          <AskBudgetGuest
            title={title}
            setTitle={setTitle}
            currency={currency}
            setCurrency={setCurrency}
            budgetAmount={budgetAmount}
            setBudgetAmount={setBudgetAmount}
          />
        )}

        {budgetAmount && (
          <BudgetDetails
            title={title}
            setTitle={setTitle}
            currency={currency}
            setCurrency={setCurrency}
            budgetAmount={setBudgetAmount}
            setGuestBudget={budgetAmount}
          />
        )}
      </div>
    </div>
  );
}

export default ComposeBudgetModal;
