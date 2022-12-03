const SearchBar = () => {
  return (
    <form action="" className="w-full">
      <div className="mb-3">
        <input
          type="search"
          className="text-gray-600 outline-none shadow border w-full rounded-md px-2.5 py-2"
          name="search"
          id="search"
        />
      </div>
      <div className="mb-3">
        <input
          type="checkbox"
          name="instock"
          checked={false}
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
