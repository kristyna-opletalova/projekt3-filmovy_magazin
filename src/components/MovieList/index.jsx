import React from "react";
import {movies} from "../../movie-database";
import {Link, NavLink} from "react-router-dom";

const MovieList = () => {

    return (<nav className="movie-list">
            {movies.map((movieItem) =>
                <NavLink key={movieItem.id} to={`/movies/${movieItem.id}`}>{movieItem.title}</NavLink>
            )}
        </nav>)
}

export default MovieList;