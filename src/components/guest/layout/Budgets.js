import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";
import BudgetItem from "./BudgetItem";

function Budgets() {
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBudgets();
    // eslint-disable-next-line
  }, []);

  //   For Spinner
  const spinnerColor = "#008080";
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const getBudgets = async () => {
    setLoading(true);
    const res = await fetch("/budgets");
    const data = await res.json();
    setBudgets(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <RingLoader
        color={spinnerColor}
        loading={loading}
        css={override}
        size={350}
      />
    );
  }

  return (
    <section className="">
      <table className="highlight responsive-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Budget</th>
            <th>Expenses</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {!loading && budgets.length === 0 ? (
          <div style={{margin:"0 auto"}} className="">No Budgets To Show</div>
        ) : (
          budgets.map((budget) => <BudgetItem key={budget.id} budget={budget} />)
        )}
        </tbody>
      </table>
    </section>
  );
}

export default Budgets;
