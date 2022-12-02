import React from "react";

const Column2 = ({ left, right }) => {
  return (
    <div
      className="block sm:flex items-center  sm:gap-x-3 gap-y-3 md:gap-x-5
    "
    >
      <div className="w-100 mb-3 sm:w-1/2 basis-0 sm:basis-1/2 space-y-3">
        {left}
      </div>
      <div className="w-100 mb-3 sm:w-1/2 basis-0 sm:basis-1/2 space-y-3">
        {right}
      </div>
    </div>
  );
};

export default Column2;
