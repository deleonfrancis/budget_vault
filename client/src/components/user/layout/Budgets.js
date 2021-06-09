import React, { useEffect } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";
import { useMediaQuery } from "react-responsive";
import M from "materialize-css";


import BudgetItem from "./BudgetItem";
import { getBudgets, setLoading } from "../../../actions/userBudgetActions";
import BudgetItemMobile from "./BudgetItemMobile";

function Budgets({
  theme,
  userBudget: { budgets, loading, filtered },
  getBudgets,
  setLoading,
}) {
  useEffect(() => {
    setLoading(true);
    getBudgets();
    
    const tooltipElements = document.querySelectorAll('.tooltipped')
    const tooltipOptions = {}
    M.Tooltip.init(tooltipElements, tooltipOptions);
    // eslint-disable-next-line
  }, []);

  // For Screen Size Detection
  const smallerThanIPad = useMediaQuery({ query: "(max-width: 767px)" });

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
      {smallerThanIPad && <div className= "row">
      {!loading && budgets.length > 0 && filtered !== null
              ? filtered.map((budget) => (
                  <BudgetItemMobile key={budget.id} budget={budget} theme={theme} />
                ))
              : budgets.map((budget) => (
                  <BudgetItemMobile key={budget.id} budget={budget} theme={theme} />
                ))}
      </div>}

      {!smallerThanIPad && (
        <table className={theme === "dark" ? "highlight" : "highlight"}>
          <thead className="">
            <tr
              style={{
                fontSize: "20px",
                borderColor: "teal",
                borderWidth: "5px",
              }}
            >
              <th style={{ paddingBottom: "2px" }}>Budget Name</th>
              <th style={{ paddingBottom: "2px" }} className="center-align">
                Budget
              </th>
              <th style={{ paddingBottom: "2px" }} className="center-align">
                Balance
              </th>
              <th style={{ paddingBottom: "2px" }}>Expenses</th>
              <th style={{ paddingBottom: "2px" }} className="center-align">
                Date Created
              </th>
              <th style={{ paddingBottom: "2px" }} className="center-align">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {!loading && budgets.length > 0 && filtered !== null
              ? filtered.map((budget) => (
                  <BudgetItem key={budget.id} budget={budget} theme={theme} />
                ))
              : budgets.map((budget) => (
                  <BudgetItem key={budget.id} budget={budget} theme={theme} />
                ))}
          </tbody>
        </table>
      )}
      {!loading && budgets.length === 0 && (
        <div style={{ margin: "10px" }} className="">
          No Budgets To Show
        </div>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  userBudget: state.userBudget,
});

export default connect(mapStateToProps, { getBudgets, setLoading })(Budgets);
