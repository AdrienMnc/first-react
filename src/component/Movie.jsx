import React from 'react';

const Movie = ({movie}) => {
    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.imageLink} width="200px" alt="osef" />
        </div>
    )
}

export default Movie;