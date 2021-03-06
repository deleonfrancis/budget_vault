import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("dark");
  

  const setMode = (mode) => {
    window.localStorage.setItem("Budget_Vault_Theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("Budget_Vault_Theme");
    // localTheme ? setTheme(localTheme) : setMode("dark");
    if (localTheme === "light") {
      setTheme(localTheme);
    //   set toggle to switch off

    } else {
      setMode("dark");
    }
  }, []);

  return [theme, toggleTheme];
};
