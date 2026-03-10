import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/portfolio">Portfolio</Link>
        </nav>
    );
}

export default Nav;