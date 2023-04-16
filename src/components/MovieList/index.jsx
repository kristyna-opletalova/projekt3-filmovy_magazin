import React from "react";
import {movies} from "../../movie-database";
import {Link} from "react-router-dom";

const MovieList = () => {

    return (<nav className="movie-list">
            {movies.map((movieItem) =>
                <Link key={movieItem.id} to={`/movies/${movieItem.id}`}>{movieItem.title}</Link>
            )}
        </nav>)
}

export default MovieList;