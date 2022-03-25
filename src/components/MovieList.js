import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const baseURL = 'https://omdbapi.com/?apikey=ee55963&';

const MovieList = (props) => {
    const [movieArr, setMovieArr] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`${baseURL}s=${props.title}&page=${page}`)
            .then(reponse => { setMovieArr(reponse.data.Search); setPage(1); })
    }, [props.title])

    useEffect(() => {
        axios.get(`${baseURL}s=${props.title}&page=${page}`)
            .then(reponse => setMovieArr(reponse.data.Search))
    }, [page])

    const showP = () => {
        if (page !== 1) setPage(l => l - 1)
    }
    const showN = () => { setPage(l => l + 1) }

    const cardEle = movieArr.map(item => {
        return <MovieCard key={item.imdbID} movie={item} />
    })

    return (<>
        <button onClick={showP}>&laquo;</button>
        <button onClick={showN}>&raquo;</button>
        <div className='list'>
            {cardEle}
        </div>
    </>
    )
}

export default MovieList