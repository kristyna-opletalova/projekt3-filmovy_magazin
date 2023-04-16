import React from "react";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className="menu">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/reviews">REVIEWS</NavLink>
            <NavLink to="/articles">ARTICLES</NavLink>
            <NavLink to="/movies">MOVIES</NavLink>
        </nav>
    )
}

export default Header;