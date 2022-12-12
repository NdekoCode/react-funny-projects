import React, { useState } from "react";

const UseEff = () => {
  const [count, setCount] = useState();
  const [title, setTitle] = useState("");
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleChange = ({ target }) => {
    setTitle(target.value);
  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>Click me {count}</button>
      </div>
      <div>
        <input type="text" value={title} onChange={handleChange} />
      </div>
    </div>
  );
};

export default UseEff;
