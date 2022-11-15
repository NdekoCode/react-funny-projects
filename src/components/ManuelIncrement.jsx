import { useState } from "react";

const ManuelIncrement = () => {
  const [n, setState] = useState(0);
  const increment = () => setState((state) => state + 1);
  return (
    <div>
      {n} <button onClick={increment}>Incrementer</button>{" "}
    </div>
  );
};
export default ManuelIncrement;
