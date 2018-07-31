// Import necessary constants
import {
    ADD_MOVIE_TOCOLLECTION,
    REMOVE_MOVIE_FROMCOLLECTION,
    ADD_COLLECTION,
    ActionFilters
}
    from './actions'

const { SHOW_COLLECTION_ADDED } = ActionFilters

// function actionFilter(state = SHOW_COLLECTION_ADDED, action) {
//     switch (action.type) {
//         case SHOW_COLLECTION_ADDED:
//             return Object.assign({}, state, {
//                 actionFilter: action.filter
//             })
//         default:
//             return state
//     }
// }

// Collection Reducer
export function collection(state = [], action) {
    switch (action.type) {
        case ADD_COLLECTION:
            return addCollection(state, action)
        case ADD_MOVIE_TOCOLLECTION:
            return addMovieToCollection(state, action)
        case REMOVE_MOVIE_FROMCOLLECTION:
            return removeMovieFromCollection(state, action)
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
                let alteredMoviesCollection = [...collection.movies.slice(0, indexOfMovie), ...collection.movies.slice(indexOfMovie + 1)]
                return Object.assign({}, collection, { movies: alteredMoviesCollection })
            }
            return collection
        })
}
