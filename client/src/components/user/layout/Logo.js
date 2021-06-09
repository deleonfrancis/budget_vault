import React from "react";
import darkLogo from "../../../images/Logo/BVDark-01.png";
import lightLogo from "../../../images/Logo/BVLight-01.png";

function Logo({ theme }) {
  return (
    <div className="center-align" style={{marginBottom:"30px"}}>
      <a href="#userAboutModal" className="modal-trigger">
        {theme === "dark" && (
          <img
            src={darkLogo}
            style={{ width: "100px", height: "auto" }}
            alt=" budget vault logo dark"
            className="responsive-img"
          />
        )}
        {theme === "light" && (
          <img
            src={lightLogo}
            style={{ width: "100px", height: "auto" }}
            alt=" budget vault logo light"
            className="responsive-img"

          />
        )}
      </a>
    </div>
  );
}

export default Logo;
