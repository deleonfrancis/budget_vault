import React from "react";

function AboutModal() {
  return (
    <div id="aboutModal" className="modal">
    <div className="modal-content">
    <h5 className="teal-text">About</h5>
      <p className="black-text">
        Budget Vault is a Web App that allows you to set and save budgets. Adding
        an expense automatically subtracts from the budget amount, allowing you to see how
        your money is being spent, your current balance, and if budget modifications are necessary.
        Remodeling a home or planning a trip? Save your budget and expenses with Budget Vault.
      </p>
      <h6 className="teal-text center-align ">Version: <span className="black-text">1.02</span></h6>
    </div>
    </div>
  );
}

export default AboutModal;
