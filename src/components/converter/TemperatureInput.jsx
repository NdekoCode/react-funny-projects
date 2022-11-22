import React from "react";

const TemperatureInput = ({ scale }) => {
  const [temperature, setTemperature] = useState("");
  const handleTempChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setTemp(value);
  };
  const name = `scale${scale}`;
  return (
    <div className="form-group mb-3">
      <label htmlFor={scale}>Temperature (en Celcius) </label>
      <input
        className="form-control"
        type="text"
        name={name}
        id={scale}
        value={temperature}
        onChange={handleTempChange}
      />
    </div>
  );
};

export default TemperatureInput;
