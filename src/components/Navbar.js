import React from 'react';
import {addMovieToList,handleMovieSearch} from '../actions';
import {connect} from 'react-redux';



class  Navbar extends React.Component {
     constructor(props){
       super(props);

       this.state={
          searchText:''
       }
     }
     handleAddToMovies = (movie) => {
      this.props.dispatch(addMovieToList(movie));
    };
     handleSearchChange =(e)=>{
          
        this.setState({
          searchText:e.target.value,
        });

     }
     handleSearchClick= ()=>{
          const {searchText}=this.state;
          this.props.dispatch(handleMovieSearch(searchText));
  
     }

  render (){
    const { showSearchResults, results: movie } = this.props.search;
        return (
            <div className="nav">
                  <div className="search-container">
                    <input onChange={this.handleSearchChange}/>
                    <button id="search-btn" onClick={this.handleSearchClick}> Search </button>
                    
                    
                    {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={() => this.props.dispatch(addMovieToList(movie))}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}

                  </div>
            </div>
          );
    }
  
}
// class NavbarWrapper extends React.Component{

//   render(){
//       return (
//       <storeContext.Consumer>
//       {(store)=><Navbar dispatch={store.dispatch}/>}  
//     </storeContext.Consumer>
//     );
//   }


// }

function mapStateToProps({search}){
  return {
    search
  }
}


export default connect(mapStateToProps)(Navbar);