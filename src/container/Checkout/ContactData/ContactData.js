import React, { useState } from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css'
import Input from '../../../components/UI/Input-Form/Input';

const ContactData = (props) => {
    const [state,setState] = useState({
        name: '',
        email: '',
        address: {
            street: '',
            postalCode:''
        }
    });

    const [formState,setFormState] = useState({
        orderForm:{

            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
                },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
                },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
                },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
                },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'emai',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false ,
                touched: false
                },

            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest',displayValue: 'fastest'},
                        {value: 'cheapest',displayValue: 'cheapest'},
                        ]
                },
                value: 'fastest',
                validation: {},
                valid: true
                },
        },
        formIsValid: false,
    })

    const orderHandler = (event) => {
        event.preventDefault();
        // console.log(props.ingredients)
        const formData = {};//empty object
        for ( let formElementIdentifier in formState.orderForm){
            formData[formElementIdentifier] = formState.orderForm[formElementIdentifier].value;
        }
        const order= {
            // ingredients: props.ingredients,
            // price: props.price,
            orderData: formData
        }
        alert('see on console');
        // console.log(order);
        // console.log(ingredients);
        // console.log(price);
    }

    const formElementsArray = [];

    for(let key in formState.orderForm){
        formElementsArray.push({
            id: key,
            config: formState.orderForm[key]
        })
    }

    const checkValidty = (value, rules) => {
        let isValid = true;
        //ALTERNATIVE ONE
        if(!rules) {
            return true;
        }

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    const inputChangedHandler = (event,inputIdentifier) => {
        // console.log(event.target.value);
        const updatedOrderForm = {
            ...formState.orderForm
        }

        const updatedFormElement= {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidty(updatedFormElement.value,updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for(let inputIdentifier in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        // console.log(formIsValid);
        
        // console.log(updatedFormElement)
        setFormState({orderForm: updatedOrderForm, formIsValid: formIsValid})
    }

    return(
        <div className="ContactData">
            <h4>ENTER CONTACT</h4>
            <form onSubmit={orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                    key={formElement.id}
                     elementType={formElement.config.elementType}
                     elementConfig ={formElement.config.elementConfig}
                     value={formElement.config.value}
                     invalid={!formElement.config.valid}
                     shouldValidate={formElement.config.validation}
                     touched={formElement.config.touched}
                     changed={(event) => inputChangedHandler(event,formElement.id)}
                     />
                ))}
                <Button 
                btnType="Success" 
                clicked={orderHandler}
                disabled={!formState.formIsValid}
                >ORDER</Button>
            </form>
        </div>
    );
}

export default ContactData;