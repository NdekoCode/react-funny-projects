import propTypes from "prop-types";
import React from "react";
const Tab = ({ children, selected }) => {
  return <div hidden={!selected}>{children}</div>;
};
Tab.propTypes = {
  children: propTypes.node.isRequired,
  selected: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.bool,
  ]),
};
export default Tab;
