import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getDetail } from '../../Redux/actions';
import detail from './detail.module.css';
const BASE_URL = 'https://image.tmdb.org/t/p/w500';


export default function Detail({match}){
    console.log(match.params.id);

    const dispatch = useDispatch()
    const movieById = useSelector(state => state.movieById);
    console.log(movieById ,' ---<<<<<--- soy lo que esta end etail component');

    useEffect(() => {
        if(match.params.id){
            dispatch(getDetail(match.params.id));
        }
    },[dispatch]);
  
    return(
        <div className={detail.contain}>
         <div className={detail.detail}> 
            <h2>{movieById.name}</h2>
            <img src={`${BASE_URL}/${movieById.poster}`}  width="250" height="250" alt="Dont found" />
               <div >
                {movieById.genres?.map((genre,i) => (
                    <li key = {i}>{genre}</li>
                ))}
            </div> 
            <p>{movieById.summary}</p>
         </div>
        </div>
    )
}