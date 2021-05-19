import React from "react";

function AboutTrigger() {
  return (
    <div className="center-align">
      <a
        href="#aboutModal"
        className="modal-trigger btn-floating waves-effect waves-light"
        style={{ fontStyle: "italic", fontSize: "18px", color: "#9e9e9e" }}
      >
      <i className="fas fa-info"></i>
      </a>

    </div>
  );
}

export default AboutTrigger;
