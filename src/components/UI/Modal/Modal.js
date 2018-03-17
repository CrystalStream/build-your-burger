import React from 'react';

import './Modal.scss';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.closeModal}/>
  <div className={props.show ? 'Modal is-open' : 'Modal is-closed'}>
    {props.children}
  </div>
  </Aux>
)

export default modal;