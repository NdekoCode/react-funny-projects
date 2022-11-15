import React from "react";
import BoilingVerdict from "../components/converter/BoilingVerdict";

const Converter = () => {
  return (
    <div className="container">
      <h1>Converter</h1>
      <BoilingVerdict celsius={100} />
      <BoilingVerdict celsius={50} />
    </div>
  );
};

export default Converter;
