import React, { memo, useCallback, useMemo, useState } from "react";
import { encoded } from "../data/utils";
const Button = memo(({ onClick }) => {
  console.log("render");
  return <button onClick={onClick}>Click-me</button>;
});
const EncodedMemo = () => {
  const [state, setState] = useState({ name: "Ndekocode", number: 0 });
  const { name, number } = state;
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => alert("It's time to change"), []);
  const handleChange = ({ target }) => {
    const value = target.value;
    const name = target.name;
    setState((d) => ({ ...d, [name]: value }));
  };
  const encode = useMemo(() => encoded(number), [number]);
  return (
    <div className="flex items-center justify-center flex-col mt-5">
      <div className="p-5 shadow-md">
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            className="px-1.5 py-2.5 shadow border-t outline-none"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number">Number</label>
          <input
            type="text"
            id="number"
            name="number"
            value={number}
            onChange={handleChange}
            className="px-1.5 py-2.5 shadow border-t outline-none"
          />
        </div>
        <Button onClick={handleClick} />
        <button onClick={() => setCount((c) => c + 1)}>
          Increment {count}
        </button>
      </div>
      <h2 className="text-3xl text-gray-600 my-3 font-bold">Encoded</h2>
      {encode}
    </div>
  );
};

export default EncodedMemo;
