import React from "react";
import { connect } from "react-redux";


function DeleteAllBudgetsBtn({guestBudget:{budgets}}) {
  return (
    <div className="center-align" style={{ margin: "15px auto 50px auto "}}>
      {budgets.length > 1 && <a href="#userDeleteAllBudgetsModal" className="waves-effect waves-light btn-large modal-trigger red">
        <i className="material-icons left">delete_forever</i>Delete All Budgets
      </a>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestBudget: state.guestBudget
})

export default connect(mapStateToProps)(DeleteAllBudgetsBtn);