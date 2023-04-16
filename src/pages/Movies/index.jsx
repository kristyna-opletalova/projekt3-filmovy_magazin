import React from "react";
import MovieList from "../../components/MovieList";
import {movies} from "../../movie-database";

const Movies = () => {
    return (
        <div className="movies">
            <h1>Movies</h1>
            <MovieList/>
        </div>
    )
}

export default Movies;