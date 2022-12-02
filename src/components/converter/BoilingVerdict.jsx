import React from "react";

const BoilingVerdict = ({ celsius }) => {
  return (
    <>
      {celsius >= 100 ? (
        <div className="p-2.5 py-3 my-1 rounded bg-green-200 text-green-900">
          L'eau bout
        </div>
      ) : (
        <div className="px-2.5 py-3 my-1 text-sm rounded bg-red-200 text-red-800">
          L'eau ne bout pas
        </div>
      )}
    </>
  );
};

export default BoilingVerdict;
