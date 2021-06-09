import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
// import { useMediaQuery } from "react-responsive";

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
import AboutModal from "./components/guest/modals/AboutModal";
import DeleteBudgetOnEditModal from "./components/guest/modals/DeleteBudgetOnEditModal";

import UserComposeBudgetModal from "./components/user/modals/UserComposeBudgetModal";
import UserDeleteBudgetModal from "./components/user/modals/UserDeleteBudgetModal";
import UserEditBudgetModal from "./components/user/modals/UserEditBudgetModal";
import UserDeleteAllBudgetsModal from "./components/user/modals/UserDeleteAllBudgetsModal";
import UserAboutModal from "./components/user/modals/UserAboutModal";
import UserDeleteBudgetOnEditModal from "./components/user/modals/UserDeleteBudgetOnEditModal";

import GuestHome from "./pages/GuestHome";
import UserHome from "./pages/UserHome";

const Container = styled.div`
  max-width: 80%;
  margin: 8rem auto 0;
`;

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  // const smallerThanIPad = useMediaQuery({ query: "(max-width: 767px)" });

  const [theme, toggleTheme] = useDarkMode();
  const [checked, setChecked] = useState(null);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

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
          <Router>
            <Switch>
              <Route exact path="/home">
                <UserHome theme={theme} />
                <UserComposeBudgetModal />
                <UserDeleteAllBudgetsModal />
                <UserEditBudgetModal />
                <UserDeleteBudgetModal />
                <UserDeleteBudgetOnEditModal />
                <UserAboutModal />
              </Route>
            </Switch>
          </Router>
          <Router>
            <Switch>
              <Route exact path="/guest">
                <GuestHome theme={theme} />
                <ComposeBudgetModal />
                <DeleteAllBudgetsModal />
                <EditBudgetModal />
                <DeleteBudgetModal />
                <DeleteBudgetOnEditModal />
                <AboutModal />
              </Route>
            </Switch>
          </Router>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
