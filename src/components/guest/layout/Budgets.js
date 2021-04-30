import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";
import BudgetItem from "./BudgetItem";

function Budgets({theme}) {
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
      <table className={theme=== "dark" ? "highlight" : "highlight"}>
        <thead className="">
          <tr style={{fontSize:"20px", borderColor:"teal", borderWidth:"5px"}}>
            <th>Title</th>
            <th className="center-align">Budget</th>
            <th className="center-align">Balance</th>
            <th>Expenses</th>
            <th className="center-align">Date</th>
            <th className="center-align">Delete</th>
          </tr>
        </thead>
        <tbody>
        {!loading && budgets.length === 0 ? (
          <div style={{margin:"0 auto"}} className="">No Budgets To Show</div>
        ) : (
          budgets.map((budget) => <BudgetItem key={budget.id} budget={budget} theme={theme} />)
        )}
        </tbody>
      </table>
    </section>
  );
}

export default Budgets;
