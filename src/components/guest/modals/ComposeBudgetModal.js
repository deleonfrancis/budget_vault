import React from "react";
import { connect } from "react-redux";
import AskBudgetGuest from "../budget/AskBudgetGuest";
import BudgetDetails from "../layout/BudgetDetails";


function ComposeBudgetModal({guestMain: {title, currency, budgetAmount}}) {

  // console.log(`${title}, ${currency}${budgetAmount}`);

  return (
    <div id="composeBudget" className="modal">
      <div className="modal-content">
        {!budgetAmount && (
          <AskBudgetGuest />
        )}
        {budgetAmount && (
          <BudgetDetails
          />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(ComposeBudgetModal);
