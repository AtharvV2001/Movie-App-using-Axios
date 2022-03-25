import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './MoviePage.css'

const baseURL = 'https://omdbapi.com/?apikey=ee55963&plot=full&i=';

const MoviePage = () => {
    const { imdbID } = useParams()
    const [movieData, setMovieData] = useState({})

    useEffect(() => {
        axios.get(`${baseURL}${imdbID}`)
            .then(res => setMovieData(res.data))
    }, [])


    return (
        <div className='movie--page'>
            <img src={movieData.Poster} alt={movieData.Title} />
            <div>
                <h1>{movieData.Title}</h1>
                <p>{movieData.Plot}</p>
                <Link to='/'>
                    <button>Go to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default MoviePage