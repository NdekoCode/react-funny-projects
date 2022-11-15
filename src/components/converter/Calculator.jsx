import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

const Calculator = () => {
  const [userTemp, setTemp] = useState(0);
  const handleTempChange = (evt) => {
    const name = evt.currentTarget.value;
    const value = evt.currentTarget.value;
    setTemp(value);
  };
  return (
    <>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="temp">Temperature</label>
          <input
            className="form-control"
            type="text"
            name="temp"
            id="temp"
            value={userTemp}
            onChange={handleTempChange}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Convertir
          </button>
        </div>
      </form>
      <BoilingVerdict celsius={userTemp} />
    </>
  );
};

export default Calculator;
