import { NavLink } from 'react-router-dom';
import { NavbarLinksWrapper } from './NavbarLinksStyle';

const NavbarLinks = () => {
    return (
        <NavbarLinksWrapper>
            <NavLink to="/">To-Do List</NavLink>
            <NavLink to="/PokeAPI">PokeAPI</NavLink>
        </NavbarLinksWrapper>
    )
}

export default NavbarLinks