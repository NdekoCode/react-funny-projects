import React, { useRef } from "react";

const WithRef = () => {
  const input = useRef(null);
  const handleClick = () => {
    console.log(input.current.value);
  };
  console.log(input);
  return (
    <div>
      <div className="my-3">
        <label htmlFor="name">Name</label>
        <input
          ref={input}
          type="text"
          placeholder="name..."
          className="px-2 py-2.5 shadow border-t"
          name="name"
        />
      </div>
      <button onClick={handleClick}>Get the value</button>
    </div>
  );
};

export default WithRef;
