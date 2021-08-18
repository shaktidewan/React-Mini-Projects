import React from 'react';
import './Input.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = ['InputElement'];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push('Invalid');
    }

    switch(props.elementType){
        case('input'):
            inputElement = <input 
            className={inputClasses.join(' ') }
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
           />;
            break;

        default:
            inputElement = <input 
            className={inputClasses.join(' ') }
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
            />;
    }
    return(
        <div className="Input">
            <label className="label">{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;