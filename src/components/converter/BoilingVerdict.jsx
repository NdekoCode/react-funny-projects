import React from "react";

const BoilingVerdict = ({ celsius }) => {
  return (
    <>
      {celsius >= 100 ? (
        <div className="alert alert-success">L'eau bout</div>
      ) : (
        <div className="alert alert-danger">L'eau ne bout pas</div>
      )}
    </>
  );
};

export default BoilingVerdict;
