import { render } from '@testing-library/react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'

const MovieCard = (props) => {
    const [render, setRender] = useState(false)

    const showName = () => {
        setRender(true)
    }

    const hideName = () => {
        setRender(false)
    }

    return (<Link to={`/movie/${props.movie.imdbID}`}>
        <div className='MovCard' onMouseEnter={showName} onMouseLeave={hideName}>
            <img src={props.movie.Poster} alt={props.movie.imdbID} className="card--img" />
            {render && <div className='card--block' id={props.movie.imdbID}>
                <p className='card--title'><strong>Title of Movie : </strong>{props.movie.Title}<br/>
                <strong>Year of Release : </strong>{props.movie.Year}</p>
            </div>}
        </div>
        </Link>
    )
}

export default MovieCard