import { useContext } from "react";
import { AppContext } from "./DefaultContext";

const ThemeButton = ({ children }) => {
  const { theme, toggleTheme } = useContext(AppContext);
  return <button style={theme}>{children}</button>;
};
export default ThemeButton;
