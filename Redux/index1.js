//middleware and added multiple actions with payload also

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'; //   download a middleware: npm i redux-logger

//store
const store = createStore(reducer, applyMiddleware(logger.default));

// reducer changes and return the state after applying the action
function reducer(state={amount:100}, action) {   //parameter order is fixed and always returns a state
    if(action.type==='increment') {
        return {amount: state.amount+1} // immutably return new state copy
    }
    if(action.type==='decrement') {
        return {amount: state.amount-1} // immutably return new state copy
    }
    if(action.type==='incrementByAmount') {
        return {amount: state.amount+action.payload} // immutably return new state copy
    }
    return state;
}

//* global state
// console.log(store.getState());

//* not required due to middleware
// store.subscribe(()=> {  // automatically run whenever state changes
//     console.log(store.getState());
// })

setInterval(()=>{
    // store.dispatch({type: 'increment'})
    // store.dispatch({type: 'decrement'}) 
    store.dispatch({type: 'incrementByAmount', payload:4})
},2000)