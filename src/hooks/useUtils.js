import { useCallback, useEffect, useState } from "react";

export function useIncrement(initial = 0, step = 1) {
  const [count, setCount] = useState(initial);
  const increment = useCallback(() => {
    setCount((c) => c + step);
  });
  return [count, increment];
}
export function useIsVisible(initial = true) {
  const [isVisible, setIsVisible] = useState(initial);
  const toggleVisible = useCallback(() => {
    setIsVisible((v) => !v);
  });
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
export function useFetch(url) {
  const [state, setState] = useState({
    items: [],
    loading: true,
  });
  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const responseData = await response.json();
      if (response.ok) {
        setState({ items: responseData, loading: false });
      } else {
        setState((d) => ({ ...d, loading: false }));
      }
    })();
    console.log(state.items);
  }, []);
  return [state.items, state.loading];
}
export function useFetchData(url, setData) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const responseData = await response.json();
      if (response.ok) {
        setLoading(false);
        setData(responseData);
      } else {
        setLoading(false);
      }
      console.log(responseData);
    })();
  }, []);
  return [loading, setLoading];
}
export function useVisible() {
  const [visible, setVisible] = useState(false);
  const handleVisible = useCallback(() => setVisible((d) => !d));
  return [visible, handleVisible];
}
