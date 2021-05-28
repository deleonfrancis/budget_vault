import React, { useEffect } from "react";

function DarkModeToggle({ theme, toggleTheme, checked, setChecked }) {
  useEffect(() => {
    if (theme === "light") {
      setChecked(true);
    } else {
      setChecked(false);
    }
    // eslint-disable-next-line
  }, [checked]);


  return (
      <div
        className="switch right-align"
        style={{ marginBottom:"25px"}}
      >
        <label>
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
