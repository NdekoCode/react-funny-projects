import React from "react";
import FilterableProductTable from "../components/productsFilter/FilterableProductTable";
import { PRODUCTS } from "../data/utils";

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
};

export default Products;
