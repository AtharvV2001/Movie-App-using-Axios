import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './Main.css';
import MovieList from './MovieList';

const Main = () => {
    const [inVal, setInVAl] = useState("batman")
    const [movTitle, setMovTitle] = useState("batman")

    return (
        <main>
            <div>
                <h1>Search for Movie Title :</h1>
                <input type='text' value={inVal} onChange={(e) => setInVAl(e.target.value)} /> 
                <button onClick={()=>{setMovTitle(inVal)}}>Search</button>
            </div>
            <MovieList title={movTitle} />
        </main>
    )
}

export default Main