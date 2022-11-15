import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Formular from "./pages/Formular";
import Home from "./pages/Home";
import Incrementor from "./pages/Incrementor";

function App() {
  return (
    <Routes>
      <Route path="/increment" element={<Incrementor />} />
      <Route path="/form" element={<Formular />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
