import React, { useEffect } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";
import BudgetItem from "./BudgetItem";
import { getBudgets, setLoading } from "../../../actions/budgetActions";

function Budgets({
  theme,
  guestBudget: { budgets, loading, filtered },
  getBudgets,
  setLoading,
}) {
  useEffect(() => {
    setLoading(true);
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

  if (loading || budgets === null) {
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
      <table className={theme === "dark" ? "highlight" : "highlight"}>
        <thead className="">
          <tr
            style={{
              fontSize: "20px",
              borderColor: "teal",
              borderWidth: "5px",
            }}
          >
            <th style={{paddingBottom: "2px"}}>Budget Name</th>
            <th style={{paddingBottom: "2px"}} className="center-align">Budget</th>
            <th style={{paddingBottom: "2px"}} className="center-align">Balance</th>
            <th style={{paddingBottom: "2px"}}>Expenses</th>
            <th style={{paddingBottom: "2px"}} className="center-align">Date</th>
            <th style={{paddingBottom: "2px"}} className="center-align">Options</th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            budgets.length > 0 &&
            filtered !== null ? filtered.map((budget)=> <BudgetItem key={budget.id} budget={budget} theme={theme} />) : budgets.map((budget) => (
              <BudgetItem key={budget.id} budget={budget} theme={theme} />
            ))}
        </tbody>
      </table>
      {!loading && budgets.length === 0 && (
        <div style={{ margin: "10px" }} className="">
          No Budgets To Show
        </div>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  guestBudget: state.guestBudget,
});

export default connect(mapStateToProps, { getBudgets, setLoading })(Budgets);
