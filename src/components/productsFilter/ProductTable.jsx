import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
  const rows = [];
  let lastCategory = null;
  products.forEach((product, index) => {
    if (product.category !== lastCategory) {
      lastCategory = product.category;
      rows.push(
        <ProductCategoryRow category={lastCategory} key={index} index={index} />
      );
    }
    rows.push(
      <ProductRow product={product} key={product.name} index={index} />
    );
  });
  return (
    <table className="table-auto text-gray-500 w-full text-sm border rounded-lg shadow-md">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="py-3 px-6">
            Name
          </th>
          <th scope="col" className="py-3 px-6">
            Price
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
export default ProductTable;
