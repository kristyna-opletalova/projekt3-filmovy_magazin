import React from "react";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className="menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>
            <NavLink to="/articles">Articles</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </nav>
    )
}

export default Header;