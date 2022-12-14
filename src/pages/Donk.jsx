import React from "react";
import { ProfileData } from "../components/context/ProfileData";
import Count from "../components/opt/Count";
import DisplayKey from "../components/opt/DisplayKey";
import UseEff from "../components/opt/UseEff";
import { useIsVisible } from "../hooks/useUtils";

const Donk = () => {
  const { profile } = ProfileData();
  console.log(profile);
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
      <Count />
    </div>
  );
};

export default Donk;
