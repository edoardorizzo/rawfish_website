function MobileSidebar() {
  return (
    <div className="mobile_search_bar">
      <div className="site_logo">
        <div className="site_image">
          <img src="../../public/rawfish-logo.png" alt="" />
        </div>
        <label>RAWFISH FINDER</label>
      </div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
    </div>
  );
}

export default MobileSidebar;
