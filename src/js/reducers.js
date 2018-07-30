// Import necessary constants
import {
    ADD_MOVIE_TOCOLLECTION,
    REMOVE_MOVIE_FROMCOLLECTION,
    ADD_COLLECTION
}
    from './actions'


export function collection(state = [], action) {
    switch (action.type) {
        case ADD_COLLECTION:
            addCollection(state, action)
            break;
        case ADD_MOVIE_TOCOLLECTION:
            addMovieToCollection(state, action)
            break;
        case REMOVE_MOVIE_FROMCOLLECTION:
            removeMovieFromCollection(state, action)
            break;
        default:
            return state;
    }
}

export function addCollection(state, action) {
    return [
        ...state,
        {
            name: action.collectionName
        }
    ]
}

export function addMovieToCollection(state, action) {
    return state.map(
        (collection) => {
            if (collection.id === action.collectionId) {
                return Object.assign({}, collection, { movies: movies.push(action.movieId) })
            }
            return collection
        })
}

export function removeMovieFromCollection(state, action) {
    return state.map(
        (collection) => {
            if (collection.id === action.collectionId) {
                let indexOfMovie = colleciton.movies.indexOf(action.movieId);
                let alteredMoviesCollection = [...collection.movies.slice(0, indexOfMovie), ...collection.movies.slice(indexOfMovie)]
                return Object.assign({}, collection, { movies: alteredMoviesCollection })
            }
            return collection
        })
}



