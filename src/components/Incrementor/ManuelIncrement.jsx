import { useEffect, useReducer, useState } from "react";
import AutoCompter from "./AutoCompter";
import Compter from "./Compter";
import ToggleCompter from "./ToggleCompter";
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload || 1 };
    case "decrement":
      if (state > 0) {
        return { count: state.count - action.payload || 1 };
      }
      return state.count;
    case "reset":
      return init(0);
    case "pause":
      return state.count;
    default:
      throw new Error(
        "Impossible de faire des operation avec cette action qui est inconnu"
      );
  }
}
function init(initialValue) {
  return {
    count: initialValue,
  };
}
const ManuelIncrement = () => {
  const [timer, setTimer] = useState(null);
  // useReducer retourner la valeur de l'etat mais aussi un dispatcher: un dispatcher est une fonction qui devra etre appeler et à qui on passera une action, cette action permettra de declencher un type de mutation particulier
  const [state, dispatch] = useReducer(reducer, 0, init);
  const pause = () => {
    console.log(timer);
    window.clearInterval(timer);
    setTimer(null);
  };
  const play = () => {
    pause();
    setTimer(window.setInterval(() => dispatch({ type: "increment" }), 1000));
  };
  const method = timer ? pause : play;
  const text = timer ? "Pause" : "Play";
  const reset = () => {
    dispatch({ type: "reset" });
    pause();
    play();
  };
  useEffect(() => {
    return () => {
      window.clearInterval(timer);
      play();
    };
  }, []);
  return (
    <div className="px-2 py-3 shadow">
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        UseReducer Incrementer {state.count}
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement {state.count}
      </button>
      <ToggleCompter />
      <Compter initial={3} step={5} />
      <AutoCompter />
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>
        Incrementer
      </button>
      <div className="flex items-center justify-center mt-5">
        <button onClick={method}>{text}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
export default ManuelIncrement;
