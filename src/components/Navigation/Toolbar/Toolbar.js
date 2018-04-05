import React from 'react';

import './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../../UI/ToogleButton/ToggleButton';

const toolbar = (props) => (
  <header className="Toolbar">
    <ToggleButton clicked={props.openDrawer}/>
    <div style={{height: '80%'}}>
      <Logo />
    </div>
    <nav className="desktop-only">
      <NavigationItems isAuth={props.isAuth} />
    </nav>
  </header>
)
 
export default toolbar;