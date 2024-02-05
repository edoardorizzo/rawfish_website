import SearchBarComponent from "./SearchBarComponent";

function SidebarComponent({ onSearch }) {
  return (
    <>
      <div className="sidebar">
        <div className="site_logo">
          <div className="site_image">
            <img src="/rawfish-logo.png" alt="" />
          </div>
          <label>RAWFISH FINDER</label>
        </div>
        <SearchBarComponent onSearch={onSearch} />
      </div>
    </>
  );
}

export default SidebarComponent;
