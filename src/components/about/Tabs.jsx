import React, { Children, cloneElement, useCallback, useState } from "react";

const Tabs = ({ children }) => {
  throw new Error();
  const childrenArray = Children.toArray(children);
  const [current, setCurrent] = useState(childrenArray[0].key);
  const newChildren = childrenArray.map((child) => {
    console.log(current === child.key);
    return cloneElement(child, { selected: child.key === current });
  });
  const handleCurrent = useCallback((v) => {
    console.log("click");
    setCurrent(v);
  });
  return (
    <div className="text-gray-900">
      {children}

      <div className="container">
        <nav>
          {childrenArray.map((child) => (
            <button
              onClick={() => handleCurrent(child.key)}
              className="m-1"
              key={child.key}
            >
              {child.props.title}
            </button>
          ))}
        </nav>
        {newChildren}
      </div>
    </div>
  );
};

export default Tabs;
