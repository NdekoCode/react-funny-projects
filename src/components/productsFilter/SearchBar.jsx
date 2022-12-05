const SearchBar = ({ filterText, inStockOnly, setState }) => {
  const handleSearch = (evt) => {
    const name = evt.target.name;
    let value;
    if (evt.target.type === "checkbox") {
      value = evt.target.checked;
    } else {
      value = evt.target.value;
    }
    setState((d) => ({ ...d, [name]: value }));
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-7xl mx-auto px-3 md:px-0"
    >
      <div className="mb-3">
        <input
          type="search"
          className="text-gray-600 outline-none shadow border w-full rounded-md px-2.5 py-2"
          name="filterText"
          placeholder="Search..."
          value={filterText}
          id="search"
          onChange={handleSearch}
        />
      </div>
      <div className="mb-3">
        <input
          type="checkbox"
          name="inStockOnly"
          checked={inStockOnly}
          onChange={handleSearch}
          id="instock"
          className="border shadow"
        />
        <label htmlFor="instock" className="text-gray-800">
          Only product in stock
        </label>
      </div>
    </form>
  );
};
export default SearchBar;
