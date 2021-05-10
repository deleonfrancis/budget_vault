import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";

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
import DarkModeToggle from "./components/themes/DarkModeToggle";
import GuestFilter from "./components/guest/layout/GuestFilter";
import Budgets from "./components/guest/layout/Budgets";
import ComposeBudgetBtn from "./components/guest/layout/ComposeBudgetBtn";
import ComposeBudgetModal from "./components/guest/modals/ComposeBudgetModal";
import DeleteBudgetModal from "./components/guest/modals/DeleteBudgetModal";
import EditBudgetModal from "./components/guest/modals/EditBudgetModal";

const Container = styled.div`
  max-width: 80%;
  margin: 8rem auto 0;
`;

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const [checked, setChecked] = useState(null);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    // const options = 
    // const options = {
    //   onOpenStart: () => {
    //     console.log("Open Start");
    //   },
    //   onOpenEnd: () => {
    //     console.log("Open End");
    //   },
    //   onCloseStart: () => {
    //     console.log("Close Start");
    //   },
    //   onCloseEnd: () => {
    //     console.log("Close End");
    //   },
    //   inDuration: 250,
    //   outDuration: 250,
    //   opacity: 0.5,
    //   dismissible: false,
    //   startingTop: "4%",
    //   endingTop: "10%"
    // };
    // document.getElementById('editBudgetModal').leanModal({
    //   dismissible: false
    // });
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
          <GuestFilter theme={theme} />
          <ComposeBudgetBtn />
          <Budgets theme={theme} />
          <ComposeBudgetModal />
          <DeleteBudgetModal />
          <EditBudgetModal />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
