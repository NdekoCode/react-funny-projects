import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Incrementor from "./pages/Incrementor";

function App() {
  return (
    <Routes>
      <Route path="increment" element={<Incrementor />} />{" "}
    </Routes>
  );
}

export default App;
