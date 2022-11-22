import { useEffect, useState } from "react";

const ManuelIncrement = () => {
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
    <div>
      {state.count} <button onClick={increment}>Incrementer</button>
      <div className="flex items-center justify-center mt-5">
        <button onClick={method}>{text}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
export default ManuelIncrement;
