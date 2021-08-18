import React,{useState} from 'react';
import Input from '../components/Input-form/Input';
import Button from '../components/Button/Button';
import './Contact.css';

const Contact = () => {
    const [state,setState] = useState({
        form:{
            email:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false,
            },
            password:{
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },

        },
        formIsValid: false,
    });
    const orderHandler = (event) => {
        event.preventDefault();
        const formData = {} //empty object
        // console.log('Before, user form data=',formData)
        for(let formElementIdentifier in state.form){
            formData[formElementIdentifier] =
            state.form[formElementIdentifier].value;
        }
        // console.log('After, user form data=',formData);

        const data ={
            userData: formData
        }
        // console.log('user data:',data)
        alert('Thank you.')
    }

    const checkValidity = (value,rules) => {
        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength){
            isValid = value.length >= rules.maxLength && isValid;
        }

        return isValid
    }

    const formElementsArray = [];

    for(let key in state.form){
        formElementsArray.push({
            id:key,
            config: state.form[key]//yaha sabai depth state haru baschan
        })
    }

    const inputChangedHandler = (event,inputIdentifier) =>{
        // console.log(event.target.value);
        //cloning original form to new form
        const updatedForm = {
            ...state.form
        }
        //cloning into more deeply for inputidentifers like elementType,elementConfig,type and so on
        const updatedFormElement={
            ...updatedForm[inputIdentifier]
        }
        //user's input
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(
            updatedFormElement.value,updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        // console.log('UpdatedFormElement=',updatedFormElement)
        updatedForm[inputIdentifier] = updatedFormElement;
        // console.log('updatedForm input identifiers=',updatedForm[inputIdentifier]);

        let formIsValid =true;
        for(let inputIdentifier in updatedForm){
            formIsValid = updatedForm[inputIdentifier].valid
            && formIsValid;
        }

        console.log(formIsValid);
        setState({form:updatedForm,formIsValid: formIsValid});
    }
           
    return(
        <div className="Contact">
            <h4>ENTER CONTACT</h4>

            <form>
                 {formElementsArray.map(formElement => (
                     <Input
                     key={formElement.id}
                     elementType={formElement.config.elementType}
                     elementConfig={formElement.config.elementConfig}
                     value={formElement.config.value}
                     
                     invalid={!formElement.config.valid}
                     shouldValidate={formElement.config.validation}
                     touched={formElement.config.touched}
                     changed={(event) =>{
                     inputChangedHandler(event,formElement.id)
                    //  console.log('input id=',formElement.id)
                     }
                     }    
                     />
                 ))}
                
                <Button 
                btnType="Success"
                clicked={orderHandler}
                disabled={!state.formIsValid}
                >LOG IN</Button>
            </form>

            {/* {state.form.email} */}

        </div>
    );
}

export default Contact;