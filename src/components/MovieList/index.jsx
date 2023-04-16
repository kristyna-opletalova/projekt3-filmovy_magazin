import React from "react";
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

            <div className="movie">
                <img
                    src="https://github.com/Czechitas-podklady-WEB/projekt-filmovy-magazin/raw/main/html-vzor/images/pulp-fiction.jpg"
                    alt="Pulp Fiction"/>

                <h2>Pulp Fiction</h2>

                <p>After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth is now
                    the main target of a manhunt led by the villain known as Ronan the Accuser. To help fight Ronan
                    and his team and save the galaxy from his power, Quill creates a team of space heroes known as
                    the "Guardians of the Galaxy" to save the galaxy.</p>
            </div>
        </div>
    )
}

export default MovieList;