const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan={2} className="py-4 px-6 font-medium text-gray-700 border-b">
        {category}
      </th>
    </tr>
  );
};
export default ProductCategoryRow;
