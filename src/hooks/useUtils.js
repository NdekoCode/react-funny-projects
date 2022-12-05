import { useEffect, useState } from "react";

function useFetch(url, data) {}
export function useIncrement(initial = 0, step = 1) {
  const [count, setCount] = useState(initial);
  const increment = () => {
    setCount((c) => c + step);
  };
  return [count, increment];
}
export function useIsVisible(initial = true) {
  const [isVisible, setIsVisible] = useState(initial);
  const toggleVisible = () => {
    setIsVisible((v) => !v);
  };
  return [isVisible, toggleVisible];
}
export function useAutoIncrement(initial = 0, step = 1) {
  // Utilisation d'un hook personnaliser dans un hook personnaliser
  const [count, increment] = useIncrement(initial, step);
  useEffect(() => {
    const timer = window.setInterval(increment, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);
  return [count, increment];
}
