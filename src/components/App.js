import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addmovies, showFavourites } from '../actions';

class App extends React.Component {
        
  componentDidMount(){
      const {store}=this.props;

       store.subscribe(()=>{
              console.log("updated");
              this.forceUpdate();
       });



      //  console.log("before dispatched");
      //  console.log("state",store.getState());
      store.dispatch(addmovies(data));
      // console.log("after dispatched");
      console.log("state",store.getState());




  }
     isFavourite =(movie)=>{
       const {favourites}=this.props.store.getState();
       const index= favourites.indexOf(movie);

       if(index!== -1){
         return true;
       }
       return false;

     }
     changeTab=(val)=>{
       this.props.store.dispatch(showFavourites(val));
     }


  render(){
     console.log(this.props.store.getState());
    // console.log(":rendeer");
    const { list,favourites,setshowFavourites}= this.props.store.getState();
    const displayMovies= setshowFavourites?favourites:list;
    return (
      <div className="App">
       <Navbar />
          <div className="main">
             <div className="tabs">
                  <div className={`tab ${setshowFavourites?'':"active-tab"}`} onClick={()=>this.changeTab(false)}>  Movies  </div>
                  <div className={`tab ${setshowFavourites?"active-tab":' '}`} onClick={()=>this.changeTab(true)}>  Favourite  </div>
             </div>
             <div className="list">
                {displayMovies.map((movie,index)=>(
                  <MovieCard movie={movie}
                   key={`movies-${index}`} 
                    dispatch={this.props.store.dispatch}
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

export default App;
