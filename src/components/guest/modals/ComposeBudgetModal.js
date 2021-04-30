import React, { useState } from "react";
import AskBudget from "../budget/AskBudget";
import AskCurrency from "../budget/AskCurrency";

function ComposeBudgetModal() {
  const [title, setTitle] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(amount);
  const [expenses, setExpenses] = useState([]);
  const [expName, setExpName] = useState("");
  const [expAmount, setExpAmount] = useState(0);

  return (
    <div
      id="composeBudget"
      className="modal modalLg"
    //   style={{width: "75% !important", height: "75% !important"}}
    >
      <div className="modal-content">
        <AskBudget />
      </div>
    </div>
  );
}

export default ComposeBudgetModal;
