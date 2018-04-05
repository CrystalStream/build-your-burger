import * as authTypes from './actionsTypes';
import axios from 'axios';

export const authStart = (name) => {
  return {
    type: authTypes.AUTH_START
  }
}

export const authSuccess = (authData) => {
  return {
    type: authTypes.AUTH_SUCCESS,
    token: authData.idToken,
    userId: authData.localId
  }
}

export const authFail = (error) => {
  return {
    type: authTypes.AUTH_FAIL,
    error
  }
}

export const auth = (email, password, isSignIn) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true
    }
    let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDWl2hOkkS_s70fqMOKgD3-yaBcn99RPcM';
    if (isSignIn) {
      authUrl = ' https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDWl2hOkkS_s70fqMOKgD3-yaBcn99RPcM';
    }
    axios.post(authUrl, authData)
      .then( res => {
        console.log('res: ', res);
        dispatch(authSuccess(res.data))
      })
      .catch( e => {
        console.log('e: ', e.response);
        const err = e.response.data.error
        dispatch(authFail(err))
      })
  }
}
