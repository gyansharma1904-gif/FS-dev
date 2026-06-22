const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "10px",
        width: "60%",
        margin: "20px auto",
        display: "block"
      }}
    />
  );
};

export default SearchBar;
