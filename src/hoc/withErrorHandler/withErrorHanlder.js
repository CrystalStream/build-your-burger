import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux/Aux';

const withErrorHandler = (WrapperComponent, axios) => {

  return class extends Component {
    state = {
      error: null
    }
  
    componentDidMount = () => {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      })
      axios.interceptors.response.use(req => req, error => {
        this.setState({ error: error });
      })
    }
  
    clearErrorHanlder = () => {
      this.setState({error: null})
    }
    
    render() {
      return (
        <Aux>
          <Modal show={this.state.error} closeModal={this.clearErrorHanlder}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrapperComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default withErrorHandler;
