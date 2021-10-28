import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';
//------------------------GETS------------------------------------------------

export function getLastestMovies(){
    return async function(dispatch){
        let response = await axios.get('/movies/lastest', {responseType:'json'});
        return dispatch({
            type: 'GET_LASTEST_MOVIES',
            payload: response.data
        });
    }
}

export function getDetail(id){
    return async function(dispatch){
        let response = await axios.get(`/movies/${id}`, {responseType:'json'});
        console.log(response)
        return dispatch({
            type: 'GET_MOVIE_BY_ID',
            payload: response.data
        });
    }
}

export function getPopular(){
    return async function(dispatch){
        let response = await axios.get(`/movies/popular`, {responseType:'json'});
        console.log(response)
        return dispatch({
            type: 'GET_POPULAR_MOVIES',
            payload: response.data
        });
    }
}

export function getTopRated(){
    return async function(dispatch){
        let response = await axios.get(`/movies/top-rated`, {responseType:'json'});
        console.log(response)
        return dispatch({
            type: 'GET_TOP_RATED',
            payload: response.data
        });
    }
}

export function getMoviesByName(name){
    return async function(dispatch){
        let response = await axios.get(`/movies?name=${name}`, {responseType:'json'});
        console.log(response)
        return dispatch({
            type: 'GET_MOVIES_BY_NAME',
            payload: response.data
        });
    }
}