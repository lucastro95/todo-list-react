import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarLogo from "./NavbarLogo/NavbarLogo";
import { NavbarWrapper } from "./NavbarStyles";


const Navbar = () => {
    return (
        <>
        <NavbarWrapper>
            <NavbarLogo />
            <NavbarLinks />
        </NavbarWrapper>
        </>
    )
}

export default Navbar