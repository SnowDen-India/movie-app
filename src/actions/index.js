// {
//     type:'ADD_MOVIES',
//     movies:[]
// }

export  const ADD_MOVIES="ADD_MOVIES";
export const  ADD_TO_FAVOURITES="ADD_TO_FAVOURITES";
export const  REMOVE_FROM_FAVOURITES="REMOVE_FROM_FAVOURITES";
export const SHOW_FAVOURITES="SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
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
export function addMovieToList(movie) {
    return {
      type: ADD_MOVIE_TO_LIST,
      movie,
    };
  }

export function showFavourites(val){
    return {
        type:SHOW_FAVOURITES,
        val
    }
}
export function handleMovieSearch(searchText){
 
    const url=`http://www.omdbapi.com/?t=${searchText}&apikey=b642f114`;

      return function(dispatch){
            fetch(url)
                 .then(response => response.json())
                 .then(movie=>{
                 console.log(movie);
                dispatch( addMovieSearchResult(movie));
                 })

         }
 


}
export function addMovieSearchResult(movie) {
    return {
      type: ADD_SEARCH_RESULT,
      movie,
    };
  }