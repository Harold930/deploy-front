import axios from 'axios';

//------------------------GETS------------------------------------------------

export function getLastestMovies(){
    return async function(dispatch){
        let response = await axios.get('http://localhost:3001/movies/lastest', {responseType:'json'});
        return dispatch({
            type: 'GET_LASTEST_MOVIES',
            payload: response.data
        });
    }
}

export function getDetail(id){
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/movie/${id}`, {responseType:'json'});
        console.log(response)
        return dispatch({
            type: 'GET_MOVIE_BY_ID',
            payload: response.data
        });
    }
}

export function getPopular(){
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/movies/popular`, {responseType:'json'});
        console.log(response)
        return dispatch({
            type: 'GET_POPULAR_MOVIES',
            payload: response.data
        });
    }
}

export function getTopRated(){
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/movies/top-rated`, {responseType:'json'});
        console.log(response)
        return dispatch({
            type: 'GET_TOP_RATED',
            payload: response.data
        });
    }
}

export function getMoviesByName(name){
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/movies?name=${name}`, {responseType:'json'});
        console.log(response)
        return dispatch({
            type: 'GET_MOVIES_BY_NAME',
            payload: response.data
        });
    }
}