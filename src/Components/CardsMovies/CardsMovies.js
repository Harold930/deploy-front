import React, { useEffect } from 'react';
import CardMovie from '../CardMovie/CardMovie.js';
 import movies from './cardsMovies.module.css';

export default function CardsMovies(props){

    return (
        <div className={movies.cardsMovies}>
        {props.movies.map((movie,i) => (
                <CardMovie movie={movie} key = {i}/>
        ))}
    </div>
    )

}