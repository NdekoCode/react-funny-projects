const ProductCategoryRow = ({ name }) => {
  return (
    <tr>
      <td colSpan={2}>{name}</td>
    </tr>
  );
};
export default ProductCategoryRow;
