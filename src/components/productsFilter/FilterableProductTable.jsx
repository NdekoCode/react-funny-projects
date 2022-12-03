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
  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setState={setState}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  );
};
export default FilterableProductTable;
