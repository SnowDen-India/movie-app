import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';



// const logger = function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       console.log("ACTION_TYPE =",action);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch,getState}) => (next) => (action) =>{
  // console.log("ACTION_TYPE =",action);
  next(action);
}
// const thunk = ({dispatch,getState}) => (next) => (action) =>{

//    if(typeof action == 'function'){
//      action(dispatch);
//      return;
//    }

//   next(action);
// }




const store = createStore(rootReducer,applyMiddleware(logger,thunk));

// export const storeContext=createContext();
// // console.log("context",storeContext);



// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:"superman"}]
// });

// console.log("After state",store.getState());

// class Provider extends React.Component{
 
// render(){
//   const  {store}=this.props;
//   return <storeContext.Provider value={store}>
//             {this.props.children}
//      </storeContext.Provider>;
// }


// }

// export function connect(callback){

//   return function (Component){
     
//              class ConnectedComponent extends React.Component{
//                           constructor(props){
//                           super(props);   
//                    this.unsubscribe=this.props.store.subscribe(()=>{ this.forceUpdate(); });
//                }
       
//                   componentWillUnmount(){
//                        this.unsubscribe();
//                   }


//      render(){
//        const{store}=this.props;
//         const state=store.getState();
//         const dataToBePassAsPros=callback(state);
//         return (<Component {...dataToBePassAsPros} dispatch={store.dispatch}/>);
 
//      }
       
//     }

//     class ComponentComponentWrapper extends React.Component{
//       render(){
        
//         return(<storeContext.Consumer>
//           {(store)=>
//                 {
//                 return  <ConnectedComponent store={store}/>
//                 }
          
//           }
//         </storeContext.Consumer>
//       ) ;
   
   
//       }
   
//    }
   
//    return ComponentComponentWrapper;


//   }
 
 
//  }






ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>
     ,
  document.getElementById('root')
);

