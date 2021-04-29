import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/themes/useDarkMode";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "./components/themes/globalStyles";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css/dist/js/materialize.min.js";
import Content from "./components/Content";
import DarkModeToggle from "./components/themes/DarkModeToggle";

const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`;

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const [checked, setChecked] = useState(null);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles />
        <DarkModeToggle
          checked={checked}
          setChecked={setChecked}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <Content />
      </Container>
    </ThemeProvider>
  );
}

export default App;
