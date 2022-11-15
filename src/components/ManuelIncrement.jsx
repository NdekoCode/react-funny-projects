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
  useEffect(() => {
    play();
    return () => {
      pause();
    };
  }, []);
  return (
    <div>
      {state.count} <button onClick={increment}>Incrementer</button>
      <div className="flex items-center mt-5">
        <button onClick={pause}>Pause</button>
        <button onClick={play}>Play</button>
      </div>
    </div>
  );
};
export default ManuelIncrement;
