//basic redux

import { createStore } from 'redux'

//store
const store = createStore(reducer) // replaced by configStore

// reducer changes and return the state after applying the action
function reducer(state={amount:100}, action) {   //parameter order is fixed and always returns a state
    if(action.type==='increment') {
        
        // state.amount =state.amount+1 //! Immutability error: it will change the previous all states check by pushing in the array.
        
        return {amount: state.amount+1} // immutably return new state copy
    }
    return state;
}

//* global state
// console.log(store.getState());

store.subscribe(()=> {  // automatically run whenever state changes
    console.log(store.getState());
})

setInterval(()=>{
    store.dispatch({type: 'increment'}) // dispatch a event and sends this object automatically to his listener, i.e., reducer
},1000)

// store.dispatch({type: 'increment'}) // sends this object automatically to his listener, i.e., reducer

// console.log(store.getState());   // no need to rewrite this again due to subscribe function
