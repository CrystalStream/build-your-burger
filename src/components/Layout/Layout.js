import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showDrawer: true
  }
  sideDrawerClosed = () => {
    this.setState({ showDrawer: false })
  }
  render() {
    return (
      <Aux>
        <div id="Layout">
          <Toolbar />
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
