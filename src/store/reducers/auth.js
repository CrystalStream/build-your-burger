import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  redirectURL: '/'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true
      }
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false
      }

    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }

    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        error: null,
        loading: false
      }

    case actionTypes.SET_AUTH_REDIRECT_URL:
      return {
        ...state,
        redirectURL: action.url
      }
  
    default:
      return state;
  }
}

export default reducer;