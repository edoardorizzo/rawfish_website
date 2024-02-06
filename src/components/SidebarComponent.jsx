import SearchBarComponent from "./SearchBarComponent";

function SidebarComponent() {
  return (
    <>
      <div className="sidebar">
        <div className="site_logo">
          <div className="site_image">
            <img src="/rawfish-logo.png" alt="" />
          </div>
          <label>RAWFISH FINDER</label>
        </div>
        <SearchBarComponent/>
      </div>
    </>
  );
}

export default SidebarComponent;
