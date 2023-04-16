import React from "react";

const Movie = ({ id, name, poster}) => {
    return (
        <div className="movie">
            <img
                src={poster}
                alt="Pulp Fiction"/>

            <h2>{name}</h2>

            <p>After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth is now
                the main target of a manhunt led by the villain known as Ronan the Accuser. To help fight Ronan
                and his team and save the galaxy from his power, Quill creates a team of space heroes known as
                the "Guardians of the Galaxy" to save the galaxy.</p>
        </div>
    )
}

export default Movie;