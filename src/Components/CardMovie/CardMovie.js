
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cardMovie from './cardMovie.module.css';
const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function CardMovie(props){
    console.log(props.movie)
    return (
        <div className={cardMovie.box}>
            <h3>{props.movie.name}</h3>
            <Link to = {`detail/${props.movie.id}`} > 
                <img src={`${BASE_URL}/${props.movie.poster}`}  width="300" height="300" alt="Dont found" />
            </Link>
        </div>
    )
}