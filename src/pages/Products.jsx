import React from "react";
import FilterableProductTable from "../components/productsFilter/FilterableProductTable";
import { PRODUCTS } from "../data/utils";

const Products = () => {
  return (
    <div className="mt-5 w-full max-w-7xl mx-auto px-3">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
};

export default Products;
