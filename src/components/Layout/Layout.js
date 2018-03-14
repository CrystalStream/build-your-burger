import React from 'react';

import Aux from '../../hoc/Aux';
import './Layout.scss';
const layout = (props) => (
  <Aux>
    <div id="Layout">
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className="content">
        {props.children}
      </main>
    </div>
  </Aux>
)

export default layout;
