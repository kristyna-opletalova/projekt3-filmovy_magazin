import React from "react";
import Movie from "../Movie";
const MovieList = () => {
    return (
        <div className="movies-container">

            <nav className="movie-list">
                <a href="#" className="active">Pulp Fiction</a>
                <a href="#">1917</a>
                <a href="#">La La Land</a>
                <a href="#">Inception</a>
                <a href="#">Guardians of the Galaxy</a>
            </nav>

            <Movie/>
        </div>
    )
}

export default MovieList;