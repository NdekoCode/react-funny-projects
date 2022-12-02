import React from "react";
import Calculator from "../components/converter/Calculator";
const Converter = () => {
  return (
    <div className="max-w-7xl mx-auto my-3">
      <h1 className="text-4xl font-bold text-gray-700 my-3">
        Converter (Temperature Celcius/ Fahrenheit)
      </h1>
      <div className="max-w-7xl mx-auto p-5 shadow bg-white rounded-lg">
        <Calculator />
      </div>
    </div>
  );
};

export default Converter;
