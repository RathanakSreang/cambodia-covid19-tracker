import { dialogConstants } from '../constants';

export function toggleAuthDialog(options) {
  return function(dispatch) {
    dispatch({
      type: dialogConstants.AUTH_DIALOG_TOGGLE,
      payload: {open: options.open}
    });
  }
}

export function toggleRegisterDialog(options) {
  return function(dispatch) {
    dispatch({
      type: dialogConstants.REGISTER_DIALOG_TOGGLE,
      payload: {open: options.open}
    });
  }
}

export function toggleChangePasswordDialog(options) {
  return function(dispatch) {
    dispatch({
      type: dialogConstants.CHANGE_PASSWORD_DIALOG_TOGGLE,
      payload: {open: options.open}
    });
  }
}

export function toggleCourseDrawer(options) {
  return function(dispatch) {
    dispatch({
      type: dialogConstants.COURSE_DRAWER_TOGGLE,
      payload: {open: options.open}
    });
  }
}
