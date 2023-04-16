import React from "react";
import {useParams} from "react-router-dom";
import movies from "../../movie-database";

const Movie = () => {
    const { movieId } = useParams();
    const movieData = movies.find((mov) => mov.id === parseInt(movieId));

    return (
        <div className="movie">
            <img
                src={movieData.poster}
                alt={movieData.title}/>

            <h2>{movieData.title}</h2>

            <p>{movieData.storyline}</p>
        </div>
    )
}

export default Movie;