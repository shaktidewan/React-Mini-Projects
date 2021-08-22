import React,{useState} from 'react';
import Button from '../../component/Button/Button';

import { connect } from 'react-redux';

// import * as actionType from '../store/actions/actions'
import * as actionCreators from '../store/actions/actions';

const UserForm = (props) => {
    const [state, setstate] = useState({
        loaduser: false    
    })

    // const nameHandler = (event) => {
    //     event.preventDefault();
    //     setstate({
    //         ...state,
    //         name:event.target.value,
    //     })
    // }

    // const ageHandler = (event) => {
    //     event.preventDefault();
    //     setstate({
    //         ...state,
    //         age:event.target.value,
        
    //     })
    // }

    const sumbitForm = () => {
        console.log(props.userName,props.userAge);
        setstate((prevstate) => {
            return {
                loaduser: !prevstate.loaduser,
            }
        })
        console.log(state.loaduser)
    }

    

    return(
        <div>
            <h1>USER FORM</h1>
            Name:<input type="text"
             placeholder={props.userName}
             onChange={props.onHandleName}
              /><br></br>
            Age:<input type="text" 
             placeholder={props.userAge} 
             onChange={props.onHandleAge}
             /><br></br>
            <Button clicked={props.onSubmitForm}>SUBMIT</Button>
            {state.loadUser === true ?
            <div>
            {props.userName}<br></br>
            {props.userAge}
            </div>
            :null
            }
    
        </div>
    );
}

const mapStateToProps = state =>{
    return{
        userName: state.name,
        userAge: state.age,
        loadUser: state.loaduser
    }
}

const mapDispatchToProps = dispatch => {
    return{
        // onHandleName: (event) => dispatch({
        //     type: actionType.CHANGE_NAME,
        //     name: event.target.value
        // }),
        // onHandleAge: (event) => dispatch({
        //     type: actionType.CHANGE_AGE,
        //     age: event.target.value
        // })
        onHandleName: (event) => dispatch(actionCreators.change_name(event)),
        onHandleAge: (event) => dispatch(actionCreators.change_age(event)),
        onSubmitForm: () => dispatch({
            type: 'SUMBIT',
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserForm);