import reducer from './auth';
import * as actionTypes from '../actions/actionsTypes';

describe('Auth reducer', () => {
  let intialState = undefined;

  beforeEach(() => {
    intialState = {
      token: null,
      userId: null,
      error: null,
      loading: false,
      redirectURL: '/'
    }
  })

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      redirectURL: '/'
    })
  });

  it('should store the token upon login', () => {
    let action = {
      type: actionTypes.AUTH_SUCCESS,
      token: '<some-token>',
      userId: '<some-id>'
    }
    expect(reducer(intialState, action)).toEqual({
      token: '<some-token>',
      userId: '<some-id>',
      error: null,
      loading: false,
      redirectURL: '/'
    })
  });
})