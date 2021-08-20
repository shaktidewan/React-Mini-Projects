import * as actionTypes from './actionsTypes'
//actions for asynchonrous code

export const increment = () => {
    // return actions 
    return{
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    // return actions 
    return{
        type: actionTypes.DECREMENT
    }
};

export const add = (value) => {
    // return actions 
    return{
        type: actionTypes.ADD,
        value: value
    }
};

export const substract = (value) => {
    // return actions 
    return{
        type: actionTypes.SUBTRACT,
        value: value
    }
};
