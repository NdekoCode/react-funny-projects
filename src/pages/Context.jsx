import React, { createContext, useContext } from "react";
import Toolbar from "../components/context/Toolbar";

const theme = {
  dark: {
    background: "#000",
    color: "#fff",
    border: "1px solid #fff",
  },
  light: {
    background: "#fff",
    color: "#000",
    border: "1px solid #000",
  },
};
export const ThemeContext = createContext(theme.dark);
export const ThemeButton = ({ children }) => {
  const { light } = useContext(ThemeContext);
  return <button style={light}>{children}</button>;
};
const Context = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
};

export default Context;
