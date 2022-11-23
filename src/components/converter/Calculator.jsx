import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

const Calculator = () => {
  const [temperature, setTemp] = useState(0);
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  const handleTempChange = (evt) => {
    // const name = evt.target.name;
    const value = evt.target.value;
    setTemp(value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <div className="form-group mb-3">
          <label htmlFor="celcius" className="block">
            Temperature (en Celcius){" "}
          </label>
          <input
            className="text-gray-500 px-2 py-2 rounded-md shadow focus:ring focus:ring-offset-2 focus:ring-blue-400 outline-none w-full my-1 transition lining-nums"
            type="number"
            name="celcius"
            id="celcius"
            value={temperature}
            onChange={handleTempChange}
          />
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="px-3 py-2 rounded-md bg-blue-700 hover:bg-blue-900 text-white focus:ring focus:ring-offset-2 focus:ring-blue-400 transition"
          >
            Convertir
          </button>
        </div>
      </form>
      <BoilingVerdict celsius={parseFloat(temperature)} />
    </>
  );
};

export default Calculator;
