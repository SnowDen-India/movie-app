import React from 'react';
import {connect} from 'react-redux';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addmovies, showFavourites } from '../actions';

class App extends React.Component {
        
  componentDidMount(){ 
     this.props.dispatch(addmovies(data));
  }
     isFavourite =(movie)=>{
       const {movies}=this.props;
       const index= movies.favourites.indexOf(movie);

       if(index!== -1){
         return true;
       }
       return false;

     }
     changeTab=(val)=>{
       this.props.dispatch(showFavourites(val));
     }


  render(){
     const {movies,search}=this.props;
    const { list,favourites,setshowFavourites}= movies;
    const displayMovies= setshowFavourites?favourites:list;
      
return (
  <div className="App">
  <Navbar search={search}/>
   <div className="main">
  <div className="tabs">
        <div className={`tab ${setshowFavourites?'':"active-tab"}`} onClick={()=>this.changeTab(false)}>  Movies  </div>
        <div className={`tab ${setshowFavourites?"active-tab":''}`} onClick={()=>this.changeTab(true)}>  Favourite  </div>
  </div>
  <div className="list">
      {displayMovies.map((movie,index)=>(
        <MovieCard movie={movie}
        key={`movies-${index}`} 
          dispatch={this.props.dispatch}
          isFavourite={this.isFavourite(movie)}
          
        />
      ))}
  </div>
  {
  displayMovies.length===0?<div className="no-movies" >No Movies to display</div>:null
  }
</div>    
</div>
);

  }
 
}

// class AppWrapper extends React.Component{

//   render(){
//       return (
//       <storeContext.Consumer>
//       {(store)=><App store={store}/>}  
//     </storeContext.Consumer>
//     );
//   }


// }
function mapStateToProps(state){
    
  return {
    movies:state.movies,
    search:state.movies
  }


}

const connectedAppComponent=connect(mapStateToProps)(App);




export default connectedAppComponent;
