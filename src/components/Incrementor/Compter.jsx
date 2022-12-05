import { useIncrement } from "../../hooks/useUtils";

const Compter = ({ initial = 0, step = 1 }) => {
  const [count, increment] = useIncrement(initial, step);
  return <button onClick={increment}>Incrementer {count}</button>;
};
export default Compter;
