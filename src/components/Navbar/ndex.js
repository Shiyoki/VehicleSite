const Navbar = (props) => {

    return (
        <nav className="navbar shadow-lg bg-white">
            <div class="px-5">
                <div className="img-container inline-block">
                    <img src={props.LogoSrc} className="img"></img>
                </div>
            </div> 
        </nav>
    )
};

export default Navbar;