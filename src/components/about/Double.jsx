import propTypes from "prop-types";
import React from "react";
const Double = ({ n }) => {
  return (
    <div className="p-3 border border-green-300 my-3 mx-1 rounded-md text-green-700 bg-green-50">
      Le double de {n} c'est {n + n}
    </div>
  );
};
Double.propTypes = {
  n: propTypes.number.isRequired,
};
export default Double;
