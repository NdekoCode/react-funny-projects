import { createContext, useCallback, useMemo, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
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
  });
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = useCallback(
    () => setCurrentTheme(currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );
  const value = useMemo(
    () => ({
      theme: theme[currentTheme],
      toggleTheme,
    }),
    [currentTheme]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
