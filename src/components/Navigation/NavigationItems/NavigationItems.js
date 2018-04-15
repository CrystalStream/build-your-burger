import React from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className="NavigationItems">
      <NavigationItem link="/">Burger Builder</NavigationItem>
      {props.isAuth ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
      <NavigationItem link={props.isAuth ? '/logout' : '/login'}>{!props.isAuth ? 'Login' : 'Logout'}</NavigationItem>
  </ul>
)
 
export default navigationItems;