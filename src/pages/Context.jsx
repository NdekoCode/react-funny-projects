import React, { useContext } from "react";
import {
  AppContext,
  AppContextProvider,
} from "../components/context/DefaultContext";
import Toolbar from "../components/context/Toolbar";

export const ThemeButton = ({ children }) => {
  const { theme, toggleTheme } = useContext(AppContext);
  return (
    <button style={theme} onClick={toggleTheme}>
      {children}
    </button>
  );
};
const Context = () => {
  return (
    <AppContextProvider>
      <div>
        <Toolbar />
      </div>
    </AppContextProvider>
  );
};

export default Context;
