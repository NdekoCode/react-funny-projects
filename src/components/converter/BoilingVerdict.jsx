import React from "react";

const BoilingVerdict = ({ celsius }) => {
  return (
    <>
      {celsius >= 100 ? (
        <div className="p-2 my-1 rounded bg-green-200 text-gray-800">
          L'eau bout
        </div>
      ) : (
        <div className="px-2 py-2.5 my-1 rounded bg-red-200 text-red-800">
          L'eau ne bout pas
        </div>
      )}
    </>
  );
};

export default BoilingVerdict;
