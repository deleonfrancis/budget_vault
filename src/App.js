import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";

import DarkModeToggle from "./components/themes/DarkModeToggle";
import styled, { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/themes/useDarkMode";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "./components/themes/globalStyles";
import "./App.css";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import ComposeBudgetModal from "./components/guest/modals/ComposeBudgetModal";
import DeleteBudgetModal from "./components/guest/modals/DeleteBudgetModal";
import EditBudgetModal from "./components/guest/modals/EditBudgetModal";
import DeleteAllBudgetsModal from "./components/guest/modals/DeleteAllBudgetsModal";
import GuestHome from "./pages/GuestHome";
import AboutModal from "./components/guest/modals/AboutModal";

const Container = styled.div`
  max-width: 80%;
  margin: 8rem auto 0;
`;

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const [checked, setChecked] = useState(null);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeMode}>
        <Container>
          <GlobalStyles />
          <DarkModeToggle
            checked={checked}
            setChecked={setChecked}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <GuestHome theme={theme} />
          <ComposeBudgetModal />
          <DeleteAllBudgetsModal />
          <EditBudgetModal />
          <DeleteBudgetModal />
          <AboutModal />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
