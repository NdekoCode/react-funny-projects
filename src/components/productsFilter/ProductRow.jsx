import { memo } from "react";

const ProductRow = memo(({ product, index }) => {
  return (
    <tr className={`${index % 2 !== 0 ? "bg-gray-50" : "bg-white"} border-b`}>
      <th
        scope="row"
        className={`py-4 px-6 font-medium whitespace-nowrap ${
          product.stocked ? "text-gray-900" : "text-red-600"
        }`}
      >
        {product.name}
      </th>
      <td>{product.price}</td>
    </tr>
  );
});
export default ProductRow;
