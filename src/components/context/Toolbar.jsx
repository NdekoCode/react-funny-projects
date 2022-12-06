import React from "react";
import ThemeButton from "./ThemeButton";
import ThemeSwitcher from "./ThemeSwitcher";

const Toolbar = () => {
  return (
    <div>
      <ThemeButton>CLick me</ThemeButton>
      <ThemeSwitcher />
    </div>
  );
};

export default Toolbar;
