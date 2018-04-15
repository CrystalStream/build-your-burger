import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Order from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions';

class App extends Component {
  componentDidMount = () => {
    this.props.onTryAutoSignIn();
  }
  
  render() {
    return (
    <div>
      <Layout>
        <Switch>
          <Route path='/checkout' component={Checkout}/>
          <Route path='/orders' component={Order}/>
          <Route path='/login' component={Auth}/>
          <Route path='/logout' component={Logout}/>
          <Route exact path='/' component={BurgerBuilder}/>
        </Switch>
      </Layout>
    </div>
  );
  }
}

const mapDispatchToProps = {
  onTryAutoSignIn: actions.checkAuthState
}


export default withRouter(connect(null, mapDispatchToProps)(App));
