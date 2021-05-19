import React, { useEffect } from "react";
import AboutTrigger from "../guest/layout/AboutTrigger";
import { useMediaQuery } from "react-responsive";
// import styled from 'styled-components'

function DarkModeToggle({ theme, toggleTheme, checked, setChecked }) {
  useEffect(() => {
    if (theme === "light") {
      setChecked(true);
    } else {
      setChecked(false);
    }
    // eslint-disable-next-line
  }, [checked]);

  const smallerThanIPad = useMediaQuery({ query: "(max-width: 767px)" });

  return (
      <div
        className="switch"
        style={{ position: "absolute", top: "2rem", right: "4rem" }}
      >
      {!smallerThanIPad && <AboutTrigger />}
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
