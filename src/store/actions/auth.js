import * as actionTypes from './actionTypes';

import axios from 'axios';

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

//for logout 

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

    //sync
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}
export const checkAuthTimeout = (expirationTIme) => {
    return dispatch =>{
        setTimeout(() => {
            //async
            dispatch(logout());
        // },expirationTIme);
    },expirationTIme*1000); //for one hour

    };
};

//ASYNC CODE
export const auth = (email,password, isSignup) => {
    return dispatch => {
        //authenticate
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSmW9lJ7r_nrKMc67_iIhqgvgK17xJvug'

        if(!isSignup){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDSmW9lJ7r_nrKMc67_iIhqgvgK17xJvug'
        }
        axios.post(url,authData)
        .then(response => {
            // console.log(response);
            const expirationData = new Date(new Date().getTime() + response.data.expiresIn*1000)
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('expirationDate',expirationData);
            //storing user' data
            localStorage.setItem('userId', response.data.userId)
            dispatch(authSuccess(response.data.idToken, response.data.localId))
            dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch( err =>{
            // console.log(err);
            dispatch(authFail(err))
        })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        //payload
        path: path
    }
}

export const authCheckState = () =>{
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate > new Date()){
                //we want to login
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token,userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }else{
                dispatch(logout());
            }
        }
    };
};