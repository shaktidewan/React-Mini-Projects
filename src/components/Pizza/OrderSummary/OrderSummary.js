import React from 'react';
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Auxilliary/Auxilliary';

const OrderSummary = (props) => {
    //AS we know we have in object format not in array format so we need to transformation into array.
    const ingredientsSummary = Object.keys(props.ingredients)
    .map((igKey,idx) => {
        return (
        <li key={idx}>
        <span>{igKey}</span>
        :{props.ingredients[igKey]}
        </li>
        );
    })
    return (
        <Aux>
        <h3>YOUR ORDER</h3>
        <p>ingredients list:</p>
        <ul>{ingredientsSummary}</ul>
        <p><strong>Total Price:</strong>{props.price.toFixed(2)}</p>
        <p>Continue to check out?</p>
        <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );

};

export default OrderSummary;