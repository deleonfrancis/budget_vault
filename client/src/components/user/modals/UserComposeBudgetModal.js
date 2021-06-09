import React from "react";
import { connect } from "react-redux";
import AskBudget from "../budget/UserAskBudget";
import BudgetDetails from "../layout/BudgetDetails";


function UserComposeBudgetModal({guestMain: {title, currency, budgetAmount}}) {

  // console.log(`${title}, ${currency}${budgetAmount}`);

  return (
    <div id="userComposeBudget" className="modal" >
      <div className="modal-content" style={{padding:"10px 24px"}}>
        {!budgetAmount && (
          <AskBudget />
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

export default connect(mapStateToProps)(UserComposeBudgetModal);
