import React from "react";
import MovieList from "../../components/MovieList";
import {createBrowserRouter, Outlet} from "react-router-dom";
import Movie from "../../components/Movie";
import movies from "../../movie-database";

const Movies = () => {

    return (
        <div className="movies">
            <h1>Movies</h1>
            <div className="movies-container">
                <MovieList/>
                <Outlet/>
            </div>
        </div>
    )
}

export default Movies;