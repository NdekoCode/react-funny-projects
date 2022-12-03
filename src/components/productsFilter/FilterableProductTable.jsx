import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = ({ products }) => {
  return (
    <>
      <SearchBar />
      <ProductTable products={products} />
    </>
  );
};
export default FilterableProductTable;
