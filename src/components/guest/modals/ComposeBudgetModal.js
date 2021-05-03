import React, { useState } from "react";
import AskBudgetGuest from "../budget/AskBudgetGuest";
import BudgetDetails from "../layout/BudgetDetails";

function ComposeBudgetModal() {
  // const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [currency, setCurrency] = useState("");
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [balance, setBalance] = useState(budgetAmount);
  
  const [expId, setExId] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [expName, setExpName] = useState("");
  const [expAmount, setExpAmount] = useState(0);
  const [guestBudget, setGuestBudget] = useState({});

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
            // setTitle={setTitle}
            currency={currency}
            // setCurrency={setCurrency}
            budgetAmount={budgetAmount}
            setBudgetAmount={setBudgetAmount}
            balance={balance}
            setBalance={setBalance}
            expId={expId}
            setExId={setExId}
            expense={expense}
            expenses={expenses}
            setExpense={setExpense}
            setExpenses={setExpenses}
            expName={expName}
            setExpName={setExpName}
            expAmount={expAmount}
            setExpAmount={setExpAmount}
            guestBudget={guestBudget}
            setGuestBudget={setGuestBudget}
          />
        )}
      </div>
    </div>
  );
}

export default ComposeBudgetModal;
