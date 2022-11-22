import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

const Calculator = () => {
  const [temperature, setTemp] = useState(0);
  return (
    <>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="celcius">Temperature (en Celcius) </label>
          <input
            className="form-control"
            type="text"
            name="celcius"
            id="celcius"
            value={temperature}
            onChange={handleTempChange}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Convertir
          </button>
        </div>
      </form>
      <BoilingVerdict celsius={parseFloat(temperature)} />
    </>
  );
};

export default Calculator;
