const redux = require('redux');
const createStore = redux.createStore;

//putting JS object
const initialState = {
    counter:0 //JS object
}

//Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            //new JS object
            ...state,
            counter: state.counter+1 //This is also JS object. getting access to old state counter
        };
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            //new JS object
            ...state,
            counter: state.counter+action.value //This is also JS object. getting access to old state counter
        };
    }
    
    return state;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
    //any code to update state
    console.log('[Subscription]', store.getState());
});

//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});//ALL UPPERCASE
// store.dispatch({type: 'ADD_COUNTER',value,name,id});//ALL UPPERCASE
store.dispatch({type: 'ADD_COUNTER',value: 10});//ALL UPPERCASE
console.log(store.getState())

