import { Route, Routes } from "react-router-dom";
import Converter from "./pages/Converter";
import Formular from "./pages/Formular";
import Home from "./pages/Home";
import Incrementor from "./pages/Incrementor";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/increment" element={<Incrementor />} />
      <Route path="/form" element={<Formular />} />
      <Route path="/converter" element={<Converter />} />
      <Route path="/produts" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
