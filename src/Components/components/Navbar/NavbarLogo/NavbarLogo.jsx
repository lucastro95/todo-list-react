import { NavbarLogoWrapper } from "./NavbarLogoStyle"


const NavbarLogo = () => {
    return (
        <NavbarLogoWrapper>
            <img src={require("../NavbarIcon/logo.png")} alt="Logo" style={{height:'70px'}}/>
            <h2>Poke To-Do</h2>
        </NavbarLogoWrapper>
    )
}

export default NavbarLogo