//Action Creators, make action name constant

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'; //   download a middleware: npm i redux-logger

//* Action name constants = remove string error
const increment='increment';
const decrement='decrement';
const incrementByAmount='incrementByAmount';

//store
const store=createStore(reducer, applyMiddleware(logger.default));


// reducer changes and return the state after applying the action
function reducer(state={amount:100}, action) {   //parameter order is fixed and always returns a state
    if(action.type===increment) {
        return {amount: state.amount+1} // immutably return new state copy
    }
    if(action.type=== decrement) {
        return {amount: state.amount-1} // immutably return new state copy
    }
    if(action.type===incrementByAmount) {
        return {amount: state.amount+action.payload} // immutably return new state copy
    }
    return state;
}

//* global state
// console.log(store.getState());


//* Action Creators
function inc() {
    return {type:increment}
}
function dec() {
    return {type:decrement}
}
function incByAmt(value) {
    return {type:incrementByAmount, payload:value}
}

setInterval(()=>{
    // store.dispatch(inc()) // store.dispatch({type: 'increment'})
    // store.dispatch(dec()) // store.dispatch({type: 'decrement'}) 
    store.dispatch(incByAmt(5)) // store.dispatch({type: 'incrementByAmount', payload:4})
},2000)