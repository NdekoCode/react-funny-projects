import React from "react";
import { scaleName } from "../../data/utils";

const TemperatureInput = ({ scale, temperature, setTemperature }) => {
  const labelName = scaleName[scale];
  const handleTempChange = (evt) => {
    const value = evt.target.value;
    setTemperature((st) => ({ ...st, temp: value, scale: scale }));
  };
  const name = `scale-${scale}`;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="text-light text-gray-700">
        Temperature en ({labelName})
      </label>
      <input
        className="text-gray-500 px-2 py-2 border rounded-md shadow focus:ring focus:ring-offset-2 focus:ring-blue-400 outline-none w-full my-1 transition lining-nums"
        type="text"
        name={name}
        id={name}
        value={temperature}
        onChange={handleTempChange}
      />
    </div>
  );
};

export default TemperatureInput;
