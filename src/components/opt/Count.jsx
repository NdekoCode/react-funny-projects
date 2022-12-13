import React, { useReducer } from "react";
const initialState = {
  count: 0,
  step: 1,
};
const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "incr":
      return { ...state, count: state.count + state.step };
    case "decr":
      if (state.count >= state.step) {
        return { ...state, count: state.count - state.step };
      }
      return state;
    case "init":
      return initialState;
    default:
      return state;
  }
};
const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-3xl mb-3 font-bold text-gray-700">{state.count}</h1>
      <div className="flex">
        <div className="p-3 shadow border-t border-l flex flex-col justify-center items-center border-gray-100 min-h-[100px] h-max min-w-[100px] w-max">
          <button
            className="p-2 px-3 rounded bg-blue-600 text-white  active:ring active:ring-offset-2 ring-blue-300 transition"
            onClick={() => dispatch({ type: "incr" })}
          >
            +
          </button>
        </div>
        <div className="p-3 shadow border-t border-l flex flex-col justify-center items-center border-gray-100 min-h-[100px] h-max min-w-[100px] w-max">
          <button
            className="p-2 px-3 rounded bg-red-600 text-white  active:ring active:ring-offset-2 ring-red-300 transition"
            onClick={() => dispatch({ type: "decr" })}
          >
            -
          </button>
        </div>
        <div className="p-3 shadow border-t border-l flex flex-col justify-center items-center border-gray-100 min-h-[100px] h-max min-w-[100px] w-max">
          <button
            className="p-2 px-3 rounded bg-red-600 text-white  active:ring active:ring-offset-2 ring-red-300 transition"
            onClick={() => dispatch({ type: "init" })}
          >
            init
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
