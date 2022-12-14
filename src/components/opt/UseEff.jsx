import React, { useEffect, useState } from "react";
import { useIncrement } from "../../hooks/useUtils";

const UseEff = () => {
  const [count, increment] = useIncrement();
  const [title, setTitle] = useState("");
  const handleChange = ({ target }) => {
    setTitle(target.value);
  };
  useEffect(() => {
    document.title = `Vous avez cliquer ${count} fois`;
    console.log(`Vous avez cliquer ${count} fois`);
  }, [count]);
  return (
    <div className="mx-auto max-w-7xl">
      <div>
        <button onClick={increment}>Click me {count}</button>
      </div>
      <div>
        <input
          type="text"
          className="px-2 py-2.5 shadow border-t"
          value={title}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default UseEff;
