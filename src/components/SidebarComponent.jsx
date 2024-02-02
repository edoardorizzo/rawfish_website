import SearchBarComponent from "./SearchBarComponent"

function SidebarComponent({onSearch}) {
    return(
        <>
            <div className="sidebar">
                <SearchBarComponent onSearch={onSearch}/>
            </div>
        </>
    )
}


export default SidebarComponent