import React from "react";
import { connect } from "react-redux";
import AskBudget from "../budget/UserAskBudget";
import BudgetDetails from "../layout/BudgetDetails";


function UserComposeBudgetModal({userMain: {budgetAmount}}) {

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
  userMain: state.userMain,
});

export default connect(mapStateToProps)(UserComposeBudgetModal);
