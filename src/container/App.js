import React,{useEffect,Suspense} from 'react';
import Layout from '../hoc/Layout/Layout';
import PizzaBuilder  from './PizzaBuilder/PizzaBuilder';
// import Checkout from './Checkout/Checkout';
// import Orders from './Orders/Orders';
// import Auth from './Auth/Auth';

import Logout from './Auth/logout/logout';
import { Route,Switch, withRouter,Redirect } from 'react-router-dom';

import {connect } from 'react-redux';
import * as actions from '../store/actions/index'


const Checkout =  React.lazy( () => {
  return import('./Checkout/Checkout');
});

const Orders =  React.lazy( () => {
  return import('./Orders/Orders');
});

const Auth =  React.lazy( () => {
  return import('./Auth/Auth');
});

const App = (props) => {

  useEffect(() => {
    props.onTryAutoSignup();
  },[])

  let routes =(
    //JSX 
    <Switch>
    <Route path="/auth" render={(props) => <Auth {...props}/> } />
    <Route path="/" exact component={PizzaBuilder} />
    <Redirect to="/" />
    </Switch>
  );

  if(props.isAuthenticated){
    routes=(
      <Switch>
       <Route path="/checkout" render={(props) => <Checkout {...props}kout/> } />
       <Route path="/orders" render={(props) => <Orders {...props}rs/> } />
       <Route path="/logout" component={Logout} />
       <Route path="/auth" render={(props) => <Auth {...props}/> } />
       <Route path="/" exact component={PizzaBuilder} />
      <Redirect to="/" />
      </Switch>
    );
  }
  return(
    <div className="App">
      <Layout>
      <Suspense fallback={<p>You can load anything like spinner loading</p>}>         
       {routes}
    </Suspense>
      </Layout>
    </div>
  )
}
//APP.JS is root component which will loaded everytime. not matter which route we vist
//this makes great app to check authentication
const mapStateToProps = state =>{
  return{
    isAuthenticated: state.auth.token !=null
  };
};

const mapDispatchToProps =  dispatch => {
  return{
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
