function SearchBarComponent({ onSearch }) {
  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div className="search_bar">
      <div className="site_image">
        <img src="../../public/rawfish-logo.png" alt="" />
      </div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
    </div>
  );
}

export default SearchBarComponent;
