import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

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
          <Toolbar openDrawer={this.sideDrawerToggle}/>
          <SideDrawer closeDrawer={this.sideDrawerClosed} showDrawer={this.state.showDrawer}/>
          <main className="content">
            {this.props.children}
          </main>
        </div>
      </Aux>
    )
  }
}

export default Layout;
