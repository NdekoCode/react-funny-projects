import { useEffect, useReducer, useState } from "react";
import AutoCompter from "./AutoCompter";
import Compter from "./Compter";
import ToggleCompter from "./ToggleCompter";
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error(
        "Impossible de faire des operation avec cette action qui est inconnu"
      );
  }
}
const ManuelIncrement = () => {
  const [timer, setTimer] = useState();
  // useReducer retourner la valeur de l'etat mais aussi un dispatcher: un dispatcher est une fonction qui devra etre appeler et à qui on passera une action, cette action permettra de declencher un type de mutation particulier
  const [count, dispatch] = useReducer(reducer, 0);
  const [state, setState] = useState({ count: 0, timer: null });
  const increment = () => {
    setState((state) => ({ ...state, count: state.count + 1 }));
  };
  const pause = () => {
    setState((state) => ({
      ...state,
      timer: window.clearInterval(state.timer),
    }));
  };
  const play = () => {
    pause();
    const timer = window.setInterval(increment, 1000);
    setState((state) => ({
      ...state,
      timer,
    }));
  };
  const method = state.timer ? pause : play;
  const text = state.timer ? "Pause" : "Play";
  const reset = () => {
    setState((state) => ({
      ...state,
      count: 0,
      timer: window.clearInterval(state.timer),
    }));
    play();
  };
  useEffect(() => {
    play();
    return () => {
      window.clearInterval(state.timer);
    };
  }, []);
  return (
    <div className="px-2 py-3 shadow">
      <button onClick={dispatch({ type: "increment" })}>
        Incrementer {count}
      </button>
      <ToggleCompter />
      <Compter initial={3} step={5} />
      <AutoCompter />
      {state.count} <button onClick={increment}>Incrementer</button>
      <div className="flex items-center justify-center mt-5">
        <button onClick={method}>{text}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
export default ManuelIncrement;
