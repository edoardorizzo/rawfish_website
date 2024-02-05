function SearchBarComponent({ onSearch }) {
  
  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div className="search_bar">
      <p>Find the people you want by searching for their first name, last name, city, or state.</p>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
    </div>
  );
}

export default SearchBarComponent;
