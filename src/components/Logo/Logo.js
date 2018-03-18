import React from 'react';

import './Logo.scss';
import burgerLogo from '../../assets/images/burger-logo.png'

const logo = (props) => (
  <div className="Logo">
    <img src={burgerLogo} alt="KBB"/>
  </div>
)
 
export default logo;