import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = ({ products }) => {
  const [state, setState] = useState({
    // Va permettre de savoir l'etat du texte
    filterText: "",
    // Permet de savoir si on veut voir que les produits qui sont en stock ou non
    inStockOnly: false,
  });
  const { filterText, inStockOnly } = state;
  const handleSearch = (evt) => {
    const name = evt.target.name;
    console.log(evt.target.type);
    let value;
    if (evt.target.type === "checkbox") {
      value = evt.target.checked;
    } else {
      value = evt.target.value;
    }
    console.log(value);
    setState((d) => ({ ...d, [name]: value }));
  };
  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        handleFilterChange={handleSearch}
      />
      <ProductTable products={products} />
    </>
  );
};
export default FilterableProductTable;
