import React from "react";
import DisplayKey from "../components/opt/DisplayKey";
import UseEff from "../components/opt/UseEff";
import { useIsVisible } from "../hooks/useUtils";

const Donk = () => {
  const [visible, toggleVisible] = useIsVisible();
  return (
    <div>
      <h1 className="text-3xl font-bold my-3">Donkey geek</h1>
      <button
        className="px-3 py-2 rounded-lg bg-green-700 text-white"
        onClick={toggleVisible}
      >
        Toggle
      </button>
      <UseEff />
      {visible && <DisplayKey />}
    </div>
  );
};

export default Donk;
