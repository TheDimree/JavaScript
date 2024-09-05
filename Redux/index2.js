//Action Creator

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


//* Action Creator
function increment() {
    return {type:'increment'}
}
function decrement() {
    return {type:'decrement'}
}
function incrementByAmount(value) {
    return {type:'incrementByAmount', payload:value}
}

setInterval(()=>{
    // store.dispatch(increment()) // store.dispatch({type: 'increment'})
    // store.dispatch(decrement()) // store.dispatch({type: 'decrement'}) 
    store.dispatch(incrementByAmount(5)) // store.dispatch({type: 'incrementByAmount', payload:4})
},2000)