import React, { useState } from "react";
import AskBudgetGuest from "../budget/AskBudgetGuest";
import BudgetDetails from "../layout/BudgetDetails";

function ComposeBudgetModal() {
  const [title, setTitle] = useState("");
  const [currency, setCurrency] = useState("");
  const [guestBudget, setGuestBudget] = useState(null);
  // const [amount, setAmount] = useState(0);
  // const [balance, setBalance] = useState(amount);
  // const [expenses, setExpenses] = useState([]);
  // const [expName, setExpName] = useState("");
  // const [expAmount, setExpAmount] = useState(0);

    console.log(`${title}, ${currency}${guestBudget}`);

  return (
    <div id="composeBudget" className="modal">
      <div className="modal-content">
      {!guestBudget && <AskBudgetGuest
          title={title}
          setTitle={setTitle}
          currency={currency}
          setCurrency={setCurrency}
          guestBudget={guestBudget}
          setGuestBudget={setGuestBudget}
        />}

      {(guestBudget) && <BudgetDetails /> }
      </div>
    </div>
  );
}

export default ComposeBudgetModal;
