import React, { useEffect, useState } from "react";

const DisplayKey = () => {
  const [keyCode, setKeyCode] = useState("5");
  const handleKeyCode = (evt) => {
    console.log(evt);
    setKeyCode(`${evt.key} = ${evt.code} => ${evt.keyCode}`);
  };
  useEffect(() => {
    document.addEventListener("keyup", handleKeyCode);
    return () => {
      document.removeEventListener("keyup", handleKeyCode);
    };
  }, []);
  return (
    <div className="p-3 shadow border-t border-l flex flex-col justify-center items-center border-gray-100 min-h-[100px] h-max min-w-[100px] w-max">
      <button className="p-2 px-3 rounded bg-blue-600 text-white">
        {keyCode}
      </button>
    </div>
  );
};

export default DisplayKey;
