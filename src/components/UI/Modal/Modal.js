import React, { Component } from 'react'

import './Modal.scss';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.show !== this.props.show
  }
  
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.closeModal}/>
        <div className={this.props.show ? 'Modal is-open' : 'Modal is-closed'}>
          {this.props.children}
        </div>
      </Aux>
    )
  }
}

export default Modal
