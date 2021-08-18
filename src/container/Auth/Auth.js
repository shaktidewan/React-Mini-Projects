import React, {useEffect,useState } from 'react';
import Input from '../../components/UI/Input-Form/Input';
import Button from '../../components/UI/Button/Button';
import './Auth.css';

import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

import {Redirect} from 'react-router-dom';

const  Auth = props => {

    //state 
    const [authForm, setAuthForm] = useState({
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false 
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false 
            }
        });

  
        //for sign up
       const [isSignup, setIsSignup] = useState(true);
   
    useEffect(() => {
        if(!props.buildingBurger && props.authRedirectPath !== '/' ){
            props.onSetAuthRedirectPath();
        }
    },[])
    

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
        if(rules.isEmail){
            const pattern = /[a-z0-9!#$%&'*+=/=?]/;
            isValid = pattern.test(value) && isValid;
        }
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(authForm.email.value,authForm.password.value,isSignup)

    } 

    const switchAuthModelHandler = () => {
        setIsSignup(!isSignup);
    }

    
    const formElementsArray = [];

    for(let key in authForm){
        formElementsArray.push({
            id: key,
            config: authForm[key]
        })
    }

    const form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}                elementConfig ={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => inputChangedHandler(event,formElement.id)} 
        />
    ));

    const inputChangedHandler =  (event, controlName) => {
        const updatedControls = {
            ...authForm,
               [controlName]:{
                   ...authForm[controlName],
                   value: event.target.value,
                   valid: checkValidty(event.target.value, authForm[controlName].validation),
                   touched: true
           }
               
        };
        setAuthForm(updatedControls);
    }

        //redirect to
    let authRedirect = null;
    if(props.isAuthenticated){
        authRedirect =<Redirect to={props.authRedirectPath} />
   }
       
     return(
        <div className='Auth'>
            {authRedirect}
            <form onSubmit={submitHandler}>
            {form}
           <Button btnType="Success">Submit</Button>
            </form>
            <Button 
            clicked={switchAuthModelHandler}
            btnType="Danger"
            >
           SWITCH TO {isSignup ?
            'LOGIN' : 'SIGNUP'}</Button>
       </div>
     );
}

const mapStateToProps = state =>{
    return {
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burger.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email,password, isSignup) => dispatch(actions.auth(email,password,isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);