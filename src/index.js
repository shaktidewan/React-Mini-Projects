import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore,combineReducers,applyMiddleware}  from 'redux';
import { Provider } from 'react-redux';

import  counterReducer from './container/store/reducers/counter'
import resultReducer from './container/store/reducers/result';


import thunk from 'redux-thunk';

//combine reducer
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

//middleware
const logger = store => {
  //another function
  return next => {
    //return another function
    return action => {
        console.log('[Middleware] Dispatchin', action);
        const result = next(action);
        console.log('[Middleware] next state', store.getState());
        return result;
      }
  }
}

//create store
const store = createStore(rootReducer, applyMiddleware(logger,thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
