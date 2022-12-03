const ProductRow = ({ product, index }) => {
  return (
    <tr className={`${index % 2 !== 0 ? "bg-gray-50" : "bg-white"} border-b`}>
      <th
        scope="row"
        className={`py-4 px-6 font-medium text-gray-900 whitespace-nowrap`}
      >
        {product.name}
      </th>
      <td>{product.price}</td>
    </tr>
  );
};
export default ProductRow;
