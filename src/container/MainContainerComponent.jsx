import "../partials/ContainerComponentStyle.scss";

function MainContainerComponent({children}) {
    return(
        <div className='main_container'>{children}</div>
    )
}

export default MainContainerComponent
