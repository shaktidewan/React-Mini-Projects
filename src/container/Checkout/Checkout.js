import React,{useState,useEffect} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

const Checkout = (props) => {
    const [state,setState] = useState({
        ingredients: {
            salad:1,
            meat: 1,
            cheese: 1,
            bacon: 1,
        }
    });

    useEffect(() => {
        const query= new URLSearchParams(props.location.search);
        const ingredients = {};

        for(let param of query.entries()){
            //['salad','1']
            ingredients[param[0]] = +param[1];
        }
        // console.log('ING:',ingredients)
        setState({ingredients: ingredients})
    },[] );

    const checkoutCancelledHanlder = () => {
        props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data');
    }

    return(
        <div>
        <CheckoutSummary 
            ingredients={state.ingredients}
            checkoutCancelled={checkoutCancelledHanlder}
            checkoutContinued={checkoutContinuedHandler}
        />
        <Route path={props.match.path+ '/contact-data'}
         render={() => (<ContactData ingredients={state.ingredients}/>)}/>
        </div>
    );
}

export default Checkout;