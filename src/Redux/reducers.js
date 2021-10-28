const intialState = {
    movies: [],
    movieById:{}
}

function rootReducer(state = intialState, action){
    switch(action.type){
        case 'GET_LASTEST_MOVIES':
            return {
                ...state,
                movies: action.payload
            }
        case 'GET_MOVIE_BY_ID':
            return {
                ...state,
                movieById: action.payload
            }
        case 'GET_POPULAR_MOVIES':
            return {
                ...state,
                movies: action.payload
            }
        case 'GET_TOP_RATED':
            return {
                ...state,
                movies: action.payload
            }
        case 'GET_MOVIES_BY_NAME':
            return {
                ...state,
                movies: action.payload
            }
        default: return state
    }
}


export default rootReducer;