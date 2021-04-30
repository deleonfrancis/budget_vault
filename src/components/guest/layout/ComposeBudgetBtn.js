import React from "react";

function ComposeBudgetBtn() {
  return (
    <div className="center-align" style={{ margin: "15px auto 50px auto "}}>
      <a href="#composeBudget" className="waves-effect waves-light btn-large modal-trigger">
        <i className="material-icons left">add</i>Compose a Budget
      </a>
    </div>
  );
}

export default ComposeBudgetBtn;
