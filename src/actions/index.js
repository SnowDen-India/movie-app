// {
//     type:'ADD_MOVIES',
//     movies:[]
// }

export  const ADD_MOVIES="ADD_MOVIES";
export const  ADD_TO_FAVOURITES="ADD_TO_FAVOURITES";
export const  REMOVE_FROM_FAVOURITES="REMOVE_FROM_FAVOURITES";
export const SHOW_FAVOURITES="SHOW_FAVOURITES";

export function addmovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}
export function addFavourites(movie){
    return{
        type:ADD_TO_FAVOURITES,
        movie
    }
}

export function removeFromFavourite (movie){
    
    return {
        type:REMOVE_FROM_FAVOURITES,
        movie
    }

}

export function showFavourites(val){
    return {
        type:SHOW_FAVOURITES,
        val
    }
}