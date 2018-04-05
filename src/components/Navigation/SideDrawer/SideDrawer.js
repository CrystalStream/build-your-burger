import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
  const styleClasses = ['SideDrawer'];
  props.showDrawer ? styleClasses.push('open') : styleClasses.push('closed')

  return (
    <Aux>
      <Backdrop show={props.showDrawer} clicked={props.closeDrawer}/>
      <div className={styleClasses.join(' ')}>
        <div style={{height: '10%'}}>
          <Logo />
        </div>
        <nav style={{marginTop: '32px'}}>
          <NavigationItems isAuth={props.isAuth}/>
        </nav>
      </div>
    </Aux>
  ); 
}
 
export default sideDrawer;