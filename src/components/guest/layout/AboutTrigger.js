import React from "react";

function AboutTrigger() {
  return (
    <div className="center-align">
      <a
        href="#aboutModal"
        className="modal-trigger"
        style={{ fontStyle: "italic", fontSize: "18px", color: "#9e9e9e" }}
      >
        about
      </a>
    </div>
  );
}

export default AboutTrigger;
