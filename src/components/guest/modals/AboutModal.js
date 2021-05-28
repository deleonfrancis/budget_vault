import React from "react";

function AboutModal() {
  return (
    <div id="aboutModal" className="modal">
      <div className="modal-content">
        <h5 className="teal-text">About</h5>
        <p className="black-text" style={{fontStyle:"italic"}}>
          Budget Vault is a Web App that allows you to set and save budgets.
        </p>
        <p className="black-text" style={{margin:"0px"}}>Remodeling a home? Planning a trip?</p>  
        <p className="black-text" style={{margin:"0px"}}>Compose a budget, add expenses, and save it in your browser's storage.</p>  
        <p className="black-text" style={{margin:"0px"}}>All within a dynamic, mobile-responsive, and user friendly UX/UI design. </p>  
        <h6 className="teal-text ">
          Version: <span className="black-text">1.11</span>
        </h6>
      </div>
    </div>
  );
}

export default AboutModal;
