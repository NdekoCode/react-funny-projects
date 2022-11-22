import "../App.css";
import ManuelIncrement from "../components/Incrementor/ManuelIncrement";
const Incrementor = () => {
  return (
    <div className="App">
      <h2 className="font-bold text-3xl text-gray-600 mb-5">Incrementor</h2>
      <ManuelIncrement />
    </div>
  );
};

export default Incrementor;
