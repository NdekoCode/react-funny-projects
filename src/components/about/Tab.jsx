import React from "react";

const Tab = ({ children, selected }) => {
  return <div hidden={!selected}>{children}</div>;
};

export default Tab;
