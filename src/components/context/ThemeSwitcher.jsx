import React, { useContext } from "react";
import { AppContext } from "./DefaultContext";

const ThemeSwitcher = () => {
  const { toggleTheme } = useContext(AppContext);
  return <button onClick={toggleTheme}>Change theme</button>;
};

export default ThemeSwitcher;
