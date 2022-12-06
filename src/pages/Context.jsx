import React from "react";
import { AppContextProvider } from "../components/context/DefaultContext";
import Toolbar from "../components/context/Toolbar";

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
