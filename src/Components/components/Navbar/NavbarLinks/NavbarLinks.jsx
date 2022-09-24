import { NavLink } from 'react-router-dom';
import { NavbarLinksWrapper } from './NavbarLinksStyle';

const NavbarLinks = () => {
    return (
        <NavbarLinksWrapper>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/PokeAPI">PokeAPI</NavLink>
        </NavbarLinksWrapper>
    )
}

export default NavbarLinks