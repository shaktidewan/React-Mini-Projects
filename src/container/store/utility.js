//Utility function
export const updateObject = (oldObject, updatedValues) => {
    return{
        ...oldObject,
        //JS object
        ...updatedValues
    }
};