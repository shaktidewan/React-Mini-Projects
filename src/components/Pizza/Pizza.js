import React from 'react';
import './Pizza.css';
import PizzaIngredients from './PizzaIngredients/PizzaIngredients';

const Pizza = (props) => {
    let transfromedingredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <PizzaIngredients key={igKey + i} type={igKey} />
        }) //[] of two elemenst
    })
    .reduce((arr, el) => { // convert aboves arrays into one array
        return arr.concat(el)
    },[]);
    // console.log(transfromedingredients);

    if(transfromedingredients.length === 0){
        transfromedingredients = <h4>Please add some ingredients</h4>
    }

    return(
        <div className='Pizza'>
        <PizzaIngredients type="bread-top" />
        {transfromedingredients}
        <PizzaIngredients type="bread-bottom" />
        </div>
    );
}

export default Pizza;