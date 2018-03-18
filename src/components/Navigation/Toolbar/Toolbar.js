import React from 'react';

import './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => (
  <header className="Toolbar">
    <div>Menu</div>
    <div style={{height: '80%'}}>
      <Logo />
    </div>
    <nav className="desktop-only">
      <NavigationItems />
    </nav>
  </header>
)
 
export default toolbar;