import * as actionTypes from './actionsTypes'

//new action
export const saveResult = (result ) => {
    return{
        type:actionTypes.STORE_RESULT,
        result:result
    };
}

export const storeResult = (result) => {
    return (dispatch,getState) => {
        setTimeout(()=>{
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter); 
            //Async Code
            dispatch(saveResult(result));
        },2000) 
    }
}; 

export const deleteResult = (resElId) => {
    // return actions 
    return{
        type: actionTypes.DELETE_RESULT,
        resultElid : resElId
    }
};