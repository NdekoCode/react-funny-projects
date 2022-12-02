import React, { useState } from "react";
import { celciusToFahrenheit, fahrenheitToCelcius } from "../../data/utils";
import Column2 from "../Column2";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

const Calculator = () => {
  const [state, setTemp] = useState({
    temp: 20,
    scale: "c",
  });
  const { temp, scale } = state;
  const celcius = scale === "c" ? temp : celciusToFahrenheit(temp);
  const fahrenheit = scale === "f" ? temp : fahrenheitToCelcius(temp);
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  const handleTempChange = (evt) => {
    // const name = evt.target.name;
    const value = evt.target.value;
    setTemp((state) => ({ ...state, temp: value }));
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="my-3">
        <Column2
          left={
            <TemperatureInput
              scale="c"
              temperature={celcius}
              setTemperature={setTemp}
            />
          }
          right={
            <TemperatureInput
              scale="f"
              temperature={fahrenheit}
              setTemperature={setTemp}
            />
          }
        />

        <div className="mb-3">
          <button
            type="submit"
            className="px-2.5 py-3 rounded-md bg-blue-700 hover:bg-blue-900 text-white focus:ring focus:ring-offset-2 focus:ring-blue-400 transition"
          >
            Convertir
          </button>
        </div>
      </form>
      <BoilingVerdict celsius={parseFloat(temp)} />
    </>
  );
};

export default Calculator;
