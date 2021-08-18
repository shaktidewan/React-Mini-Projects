import  { connect } from 'react-redux'
// import * as actionTypes from '../../store/action';

import React,{useState} from 'react';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';

import * as pizzaBuilderActions from '../../store/actions/index'

const PizzaBuilder = (props) => {

    const [purchases, setpurchases] = useState({
        purchasing: false
    })

    function updatePurchaseState(ingredients) {
        const sum = Object.keys( ingredients ).map( igKey => {
            return ingredients[igKey];
        } )
        .reduce( ( sum, el ) => {
            return sum + el;
        }, 0 );
        return sum > 0 ;
    } 

    const purchaseHandler = () => {
        if(props.isAuthenticated){
            setpurchases({purchasing: true});
        }
        else {
            props.onSetAuthRedirectPath('/checkout');
            props.history.push('/auth'); 
        }
    }
 
    const purchasedCancelHandler = () => {
        setpurchases({purchasing:false})
    }

    const purcharseContinueHandler = () => {
        // console.log(props);

        const queryParams= []; //empty array
        for( let i in props.ings){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(props.ings[i]));
        }

        const queryString = queryParams.join('&');
        props.history.push({
            pathname: '/checkout',
            search: '?'+queryString,
        });
    }

    const disableInfo = {
        ...props.ings
    }

    for( let key in disableInfo){ 
        disableInfo[key] = disableInfo[key] <=0
    }//{salad: true, meat:false, ...}

    return(
        <Aux>
            <Modal show={purchases.purchasing} modalClosed={purchasedCancelHandler}>
                <OrderSummary
                price={props.price}
                ingredients={props.ings}
                purchaseCancel={purchasedCancelHandler}
                purchaseContinue ={purcharseContinueHandler}
                />
            </Modal>
             <Pizza ingredients={props.ings}/>
             <BuildControls 
                removeIngredient= {props.onIngredientRemoved}
                moreIngredient={props.onIngredientAdded}
                disabled={disableInfo}
                ordered = {purchaseHandler}
                purchasabled = {updatePurchaseState(props.ings)}
                price={props.price}
                isAuth = {props.isAuthenticated}
             />
        </Aux>
    );
}
const mapStateToProps = state =>{
    return{
        ings: state.burger.ingredients,
        price: state.burger.totalPrice,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return{
        onIngredientAdded: (ingName) => dispatch(pizzaBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(pizzaBuilderActions.removeIngredient(ingName)),
        onSetAuthRedirectPath: (path) => dispatch(pizzaBuilderActions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PizzaBuilder);