import React, { Component } from 'react';
import { connect } from 'react-redux'

import Aux from '../Aux/Aux';
import './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showDrawer: false
  }

  sideDrawerClosed = () => {
    this.setState({ showDrawer: false })
  }

  sideDrawerToggle = () => {
    this.setState((prevState) => {
      return { showDrawer: !prevState.showDrawer }
      }
    )
  }
  render() {
    return (
      <Aux>
        <div id="Layout">
          <Toolbar openDrawer={this.sideDrawerToggle} isAuth={this.props.isAuthenticated}/>
          <SideDrawer closeDrawer={this.sideDrawerClosed} showDrawer={this.state.showDrawer} isAuth={this.props.isAuthenticated}/>
          <main className="content">
            {this.props.children}
          </main>
        </div>
      </Aux>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token
})



export default connect(mapStateToProps)(Layout);
