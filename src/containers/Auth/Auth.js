import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import * as authActions from '../../store/actions'

import './Auth.scss';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elemType: 'input',
        opts: { type: 'email', placeholder: 'Email Address', name: 'email', value: ''},
        validation: { required: true, isEmail: true },
        valid: false,
        touched: false
      },
      password: {
        elemType: 'input',
        opts: { type: 'password', placeholder: 'Password', name: 'password', value: ''},
        validation: { required: true, minLength: 6 },
        valid: false,
        touched: false
      }
    },
    isSignIn: true
  }

  componentDidMount = () => {
    if (!this.props.buildingBurger && this.props.redirectURL !== '/') {
      this.props.onSetAuthRedirectURL();
    }
  }
  

  checkvalidity(value, rules) {
    let valid = true;
    // This is to prevent multiple if's statements to alter an already resolved rule
    if (rules.required) {
      valid = value.trim() !== '' && valid;
    }

    if (rules.minLength) {
      valid = value.length >= rules.minLength && valid;
    }

    if (rules.maxLength) {
      valid = value.length <= rules.maxLength && valid;
    }

    if (rules.isEmail) {
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      valid = pattern.test(value) && valid;
    }

    return valid;
  }

  inputFormChangedHanlder = (e, inpId) => {
    const formControls = { ...this.state.controls };
    const elemnt = { ...formControls[inpId] }
    const configElem = { ...elemnt.opts }
    configElem.value = e.target.value;
    elemnt.opts = configElem
    elemnt.valid = this.checkvalidity(elemnt.opts.value, elemnt.validation);
    elemnt.touched = true;
    formControls[inpId] = elemnt;

    this.setState({ controls: formControls })
  }

  onSubmitHanlder = (e) => {
    e.preventDefault();
    this.props.onAuth(this.state.controls.email.opts.value, this.state.controls.password.opts.value, this.state.isSignIn)
  }

  onSwithAuth = () => {
    this.setState( prevState => {
      return { isSignIn: !prevState.isSignIn }
    })
  }

  render() {
    let inputs = Object.keys(this.state.controls)
      .map( i => this.state.controls[i])
      .map( (inp, i) => <Input key={inp.opts.name + i} 
          changed={(e) => this.inputFormChangedHanlder(e, inp.opts.name) } 
          elemType={inp.elemType} 
          config={inp.opts}
          valid={inp.valid}
          validatable={inp.validation}
          touched={inp.touched}/>)

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>
    }

    let content = (
      <div>
        {errorMessage}
        <form onSubmit={this.onSubmitHanlder}>
          {inputs}
          <Button btnType="success" submit>Submit</Button>
          <Button btnType="danger" clicked={this.onSwithAuth}>Got to {this.state.isSignIn ? 'Sign up' : 'Sign in'}!</Button>
        </form>
      </div>
    );
    if (this.props.loading) {
      content = <Spinner />
    }

    if (this.props.isAuth) {
      content = <Redirect to={this.props.redirectURL} />
    }
   
    return (
      <div className="Auth">
        {content}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  isAuth: !!state.auth.token,
  buildingBurger: state.br.building,
  redirectURL: state.auth.redirectURL
})

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, signIn = false) => dispatch(authActions.auth(email, password, signIn)),
    onSetAuthRedirectURL: () => dispatch(authActions.setAuthRedirectPath('/'))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);