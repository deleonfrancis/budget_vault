import React, { useEffect } from "react";
import M from "materialize-css";

function DarkModeToggle({ theme, toggleTheme, checked, setChecked }) {
  useEffect(() => {
    if (theme === "light") {
      setChecked(true);
    } else {
      setChecked(false);
    }

    const tooltipElements = document.querySelectorAll('.tooltipped')
    const tooltipOptions = {}

    M.Tooltip.init(tooltipElements, tooltipOptions);
    // eslint-disable-next-line
  }, [checked]);


  return (
      <div
        className="switch right-align"
        style={{ marginBottom:"25px"}}
      >
        <label className="tooltipped" data-position="bottom" data-tooltip="Theme Selector">
          Dark
          <input
            type="checkbox"
            defaultChecked={checked}
            onClick={toggleTheme}
          />
          <span className="lever"></span>
          Light
        </label>
      </div>
  );
}

export default DarkModeToggle;
