import * as actionTypes from '../actions/actionsTypes';

const initialState={
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: action.result}) //getting counter value gobal state
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElid);//filter will return new array
            return{
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default reducer;