import { userService } from '../services';
import { userConstants } from '../constants';
import { setTokens } from '../store/tokenStore';
import { defaultHeader } from '../services/defaultHeader';
import { reset, SubmissionError } from 'redux-form';
import {history} from '../routers/AppRouter';
import {routeConstants} from '../constants';

export function login(params) {
  return function(dispatch) {
    return userService.login(params)
      .then((response) => {
        const auth = response.data.auth;
        setTokens(auth.token, auth.refresh_token);
        defaultHeader();

        dispatch({
          type: userConstants.GET_CURRENT_USER_SUCCESS,
          payload: response.data
        });
        history.push(routeConstants.EXPLORE);
      })
      .catch((err) => {
        dispatch({ type: userConstants.GET_CURRENT_USER_FAIL })
        throw new SubmissionError({ _error: 'Username or password invalid!' })
      })
  }
}


export function loginWithToken() {
  return function(dispatch) {
    userService.getCurrentUser()
      .then((response) => {
        dispatch({
          type: userConstants.GET_CURRENT_USER_SUCCESS,
          payload: response.data
        });
        dispatch({ type: userConstants.LOADING_COMPLETE });
      }).catch(() => {
        dispatch({ type: userConstants.GET_CURRENT_USER_FAIL });
        dispatch({ type: userConstants.LOADING_COMPLETE });
      });
  };
}


export function changePassword(params) {
  return function(dispatch) {
    return userService.changePassword(params)
      .then((response) => {
        dispatch({
          type: userConstants.RESET_PASSWORD_SUCCESS,
          payload: response.data
        });
      })
      .catch((err) => {
        dispatch({ type: userConstants.RESET_PASSWORD_FAIL });
        throw new SubmissionError({...err.response.data.errors});
      });
  };
}


export function forgotPassword(params) {
  return function(dispatch) {
    return userService.forgotPassword(params)
      .then((response) => {
        dispatch(reset('ForgotPasswordForm'));
        // message.success('Please check your email!');
        dispatch({
          type: userConstants.REQUEST_FORGET_PASSWORD_SUCCESS,
          payload: response.data
        });
      })
      .catch((err) => {
        dispatch({ type: userConstants.REQUEST_FORGET_PASSWORD_FAIL });
        throw new SubmissionError({...err.response.data.errors, _error: 'Email not found'});
      });
  };
}

export function resetIsSentMail() {
  return function(dispatch) {
    dispatch({ type: userConstants.RESET_IS_SENT_MAIL });
  };
}

export function signUp(params) {
  return function(dispatch) {
  }
}

export function logOut() {
  return function(dispatch) {
    userService.logout()
      .then(() => {
        setTokens('', '');
        defaultHeader();

        dispatch({
          type: userConstants.LOGOUT_USER_SUCCESS,
          payload: {}
        });
        history.push('/');
      })
      .catch(() => {
        dispatch({ type: userConstants.LOGOUT_USER_SUCCESS_FAIL });
      });
  };
}
