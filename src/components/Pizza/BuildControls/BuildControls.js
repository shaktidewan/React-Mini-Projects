import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const BuildControls = (props) => (
    <div className='BuildControls'>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
         { controls.map(ctrl =>(
             <BuildControl 
             key={ctrl.label} 
             label={ctrl.label}
            //  type={ctrl.type}
            removed={() => props.removeIngredient(ctrl.type)}
            //kun type chai add garne vanera type ctrl props bata pathako
             added={() => props.moreIngredient(ctrl.type)}
             disabled ={props.disabled[ctrl.type]}
             />
         ))}
         
         <button
         disabled={!props.purchasabled}
         onClick={props.ordered}
         >{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO MAKE ORDER'}</button>
    </div>
);

export default BuildControls;