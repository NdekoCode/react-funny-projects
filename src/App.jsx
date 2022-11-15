import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ManuelIncrement from "./components/ManuelIncrement";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ManuelIncrement />
    </div>
  );
}

export default App;
