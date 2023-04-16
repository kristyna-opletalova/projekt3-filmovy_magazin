import React from "react";
import {useParams} from "react-router-dom";
import movies from "../../movie-database";

const Movie = () => {
    const {movieId} = useParams();
    const movieData = movies.find((mov) => mov.id === parseInt(movieId));

    return (
        <div className="movie">
            <h2>{movieData.title}</h2>

            <div className="movie-wrapper">
                <img
                    src={movieData.poster}
                    alt={movieData.title}
                />
                <div className="movie-bio">
                    <p><b>year:</b> {movieData.year}</p>
                    <p><b>rating:</b> {movieData.rating}</p>
                    <p><b>director:</b> {movieData.director}</p>
                    <p><b>genre:</b> {movieData.genre}</p>
                </div>
            </div>
            <p>{movieData.storyline}</p>
        </div>
    )
}

export default Movie;