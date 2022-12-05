import { useIsVisible } from "../../hooks/useUtils";
import Compter from "./Compter";

const ToggleCompter = () => {
  const [compterVisible, toggleCompter] = useIsVisible();
  return (
    <div>
      <input
        type="checkbox"
        className="shadow border"
        checked={compterVisible}
        onChange={toggleCompter}
      />
      {compterVisible && <Compter />}
    </div>
  );
};
export default ToggleCompter;
