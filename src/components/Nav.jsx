import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <NavLink to="/">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
        </nav>
    );
}

export default Nav;