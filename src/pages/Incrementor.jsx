import "../App.css";
import ManuelIncrement from "../components/Incrementor/ManuelIncrement";
const Incrementor = () => {
  return (
    <div className="mqx-w-7xl mx-auto px-3 mt-10">
      <h2 className="font-bold text-3xl text-center text-gray-600 mb-5">
        Incrementor
      </h2>
      <div className="flex justify-center items-center">
        <ManuelIncrement />
      </div>
    </div>
  );
};

export default Incrementor;
