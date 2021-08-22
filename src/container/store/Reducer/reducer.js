import * as actionType from '../actions/actions';

const  initialState = {
    name: 'Name',
    age: 'Age',
    loaduser: false
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionType.CHANGE_NAME:
            return{
                ...state,
                name: action.name
            }
        
        case actionType.CHANGE_AGE:
            return{
                ...state,
                age: action.age,
            }
        
        case 'SUMBIT':
            return{
                loaduser: !action.loaduser,
            }
        
    }
    return state;
}

export default reducer;