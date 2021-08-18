import * as actionTypes from '../actions/actionTypes';

const initialState= {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
    buidling: false
}
const INGREDIENTS_PRICES = {
    salad:0.5,
    cheese: 0.4,
    meat: 1,
    bacon: 2,
}

const Reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENTS:
            return{
                //copying old state
                ...state,
                ingredients: {
                    ...state.ingredients,
                    //override with new ingredients
                    //we can do it by ES6 special syntax to dynamically override property in a given JS object
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName],
                buidling: true
            };
        case actionTypes.REMOVE_INGREDIENTS:
            return{
                //copying old state
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredientName],
                buidling: false
            };
        
        default:
            return state;
    }
}

export default Reducer;
