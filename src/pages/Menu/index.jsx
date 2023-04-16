import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="menu">
            <div className="menu-item"><Link to="/">Home</Link></div>
            <div className="menu-item"><Link to="/reviews">Reviews</Link></div>
            <div className="menu-item"><Link to="/articles">Articles</Link></div>
            <div className="menu-item"><Link to="/movies">Movies</Link></div>
        </nav>
    )
}

export default Header;