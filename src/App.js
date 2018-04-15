import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions';


// Lazy Loading Component
const asyncCheckout = asyncComponent( () => {
  return import('./containers/Checkout/Checkout')
})
const asyncOrder = asyncComponent( () => {
  return import('./containers/Orders/Orders')
})
const asyncAuth = asyncComponent( () => {
  return import('./containers/Auth/Auth')
})

class App extends Component {
  componentDidMount = () => {
    this.props.onTryAutoSignIn();
  }
  
  render() {
    let routes = (
      <Switch>
        <Route path='/login' component={asyncAuth}/>
        <Route exact path='/' component={BurgerBuilder}/>
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
      <Switch>
        <Route path='/checkout' component={asyncCheckout}/>
        <Route path='/orders' component={asyncOrder}/>  
        <Route path='/logout' component={Logout}/>
        <Route path='/login' component={asyncAuth}/>
        <Route exact path='/' component={BurgerBuilder}/>
        <Redirect to="/" />
      </Switch>
      )
    }
    return (
    <div>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token
})

const mapDispatchToProps = {
  onTryAutoSignIn: actions.checkAuthState
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
