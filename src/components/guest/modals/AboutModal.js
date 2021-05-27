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
        <p className="black-text" style={{margin:"0px auto 20px"}}>Save your budget and expenses with {" "}
       <span className="teal-text">Budget Vault</span>.</p> 
        <h6 className="teal-text ">
          Version: <span className="black-text">1.09</span>
        </h6>
      </div>
    </div>
  );
}

export default AboutModal;
