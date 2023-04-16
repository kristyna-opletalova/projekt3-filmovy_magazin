import React from "react";
import Movie from "../Movie";
import {movies} from "../../movie-database";
import {createBrowserRouter, Link, Outlet} from "react-router-dom";

const MovieList = () => {

    return (<nav className="movie-list">
            {movies.map((movieItem) =>
                <Link to={`/movies/${movieItem.id}`}>{movieItem.title}</Link>
            )}
        </nav>)
}


export default MovieList;