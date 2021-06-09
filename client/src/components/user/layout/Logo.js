import React, {useEffect} from "react";
import darkLogo from "../../../images/Logo/BVDark-01.png";
import lightLogo from "../../../images/Logo/BVLight-01.png";
import M from "materialize-css";


function Logo({ theme }) {

  useEffect(() => {
    const tooltipElements = document.querySelectorAll('.tooltipped')
    const tooltipOptions = {}
    M.Tooltip.init(tooltipElements, tooltipOptions);
  }, [])



  return (
    <div className="center-align" style={{marginBottom:"30px"}}>
      <a href="#userAboutModal" className="modal-trigger tooltipped" data-position="bottom" data-tooltip="About" >
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
