import navbarStyle from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className={navbarStyle}>
            <Link to="/">Home</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/photos">Photos</Link>
            <Link to="/contacts">Contacts</Link>
        </nav>
    );
}

export default Navbar;