export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_AGE = 'CHANGE_AGE';

//actions for asynchonrous code
export const change_name = (event) => {
    return{
        type: CHANGE_NAME,
        name: event.target.value
    }
}

//actions for asynchonrous code
export const change_age = (event) => {
    return{
        type: CHANGE_AGE,
        age:event.target.value
    }
}
