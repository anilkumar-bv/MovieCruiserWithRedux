// action types
export const ADD_MOVIE_TOCOLLECTION = 'ADD_MOVIE_TOCOLLECTION'
export const REMOVE_MOVIE_FROMCOLLECTION = 'REMOVE_MOVIE_FROMCOLLECTION'
export const GET_COLLECTION = 'GET_COLLECTION'
export const ADD_COLLECTION = 'ADD_COLLECTION';

//action creators
export function addCollectionToStore(collectionName) {
    return {
        type: ADD_COLLECTION,
        collectionName
    }
}

export function addMovieToCollectionStore(collectionId, movieId) {
    return {
        type: ADD_MOVIE_TOCOLLECTION,
        collectionId,
        movieId
    }
}

export function removeMovieFromCollectionStore(collectionId, movieId) {
    return {
        type: REMOVE_MOVIE_FROMCOLLECTION,
        collectionId,
        movieId
    }
}