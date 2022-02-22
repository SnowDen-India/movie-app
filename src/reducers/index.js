import { ADD_MOVIES ,ADD_TO_FAVOURITES,REMOVE_FROM_FAVOURITES,SHOW_FAVOURITES} from "../actions";

const initialMovieState={
  list:[],
  favourites:[],
  setshowFavourites:false
}


export default function movies (state=initialMovieState,action){
     
         switch (action.type){
             case ADD_MOVIES:
               return{
                 ...state,
                 list:action.movies
               }
               case ADD_TO_FAVOURITES:
                 return {
                   ...state,
                   favourites:[action.movie , ...state.favourites]
                 }
                 case REMOVE_FROM_FAVOURITES: 
                     const filteredArray=state.favourites.filter(
                       movie=>movie.Title!==
                       action.movie.Title
                       );
                return {
                         ...state,
                         favourites:filteredArray
                 }
                 case SHOW_FAVOURITES:
                   return{
                     ...state,
                     setshowFavourites:action.val
                   }

                
                 default:
                   return state;



         }








  //   if(action.type===ADD_MOVIES){
//       return {
//         ...state,
//         list:action.movies
//       }
//   }
// return state;


}