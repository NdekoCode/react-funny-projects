import { Route, Routes } from "react-router-dom";
import { ProfileProvider } from "./components/context/ProfileData";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Context from "./pages/Context";
import Converter from "./pages/Converter";
import Donk from "./pages/Donk";
import EncodedMemo from "./pages/Encoded";
import Formular from "./pages/Formular";
import Home from "./pages/Home";
import Incrementor from "./pages/Incrementor";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Users from "./pages/Users";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/increment" element={<Incrementor />} />
      <Route path="/form" element={<Formular />} />
      <Route path="/converter" element={<Converter />} />
      <Route path="/products" element={<Products />} />
      <Route path="/context" element={<Context />} />
      <Route path="/encode" element={<EncodedMemo />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
      <Route
        path="/donk"
        element={
          <ProfileProvider>
            <Donk />
          </ProfileProvider>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
