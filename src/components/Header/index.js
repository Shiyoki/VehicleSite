import logo from "../../images/logo.png"
import herobanner from "../../images/herobanner.jpg"

import Hero from "../Hero";
import Navbar from "../Navbar/ndex";

const Header = () => {

    return (
        <header>
            <Navbar LogoSrc={logo} />
            <Hero HeroSrc={herobanner} />
        </header>
    )
};

export default Header;