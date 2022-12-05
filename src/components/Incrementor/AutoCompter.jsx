import React from "react";
import { useAutoIncrement } from "../../hooks/useUtils";

const AutoCompter = () => {
  const [count, increment] = useAutoIncrement();
  return <button onClick={increment}>Auto increment {count}</button>;
};

export default AutoCompter;
