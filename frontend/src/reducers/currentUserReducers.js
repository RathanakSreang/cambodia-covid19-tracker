import { userConstants } from '../constants';

export default function reducer(state={
    user: {},
    isUpdating: false,
    isOnboarding: true,
    isMailSent: false,
    isResetPassword: false
  }, action) {
    switch(action.type) {
      case (userConstants.UPDATING_USER_PROFILE): {
        const {updating} = action.payload;
        return {
          ...state,
          isUpdating: updating
        };
      }

      case (userConstants.GET_CURRENT_USER_SUCCESS): {
        const {user} = action.payload;
        return {
          ...state,
          user: user,
        };
      }

      case (userConstants.LOGOUT_USER_SUCCESS): {
        return {
          ...state,
          user: {},
        };
      }

      case (userConstants.LOADING_COMPLETE): {
        return {
          ...state,
          isOnboarding: false
        };
      }

      case (userConstants.REQUEST_FORGET_PASSWORD_SUCCESS): {
        return {
          ...state,
          isMailSent: true
        };
      }

      case (userConstants.RESET_IS_SENT_MAIL): {
        return {
          ...state,
          isMailSent: false
        };
      }

      case (userConstants.RESET_PASSWORD_SUCCESS): {
        return {
          ...state,
          isResetPassword: true
        };
      }

      case (userConstants.INIT_RESET_PASSWORD): {
        return {
          ...state,
          isResetPassword: false
        };
      }

      default:
        return state;
    }
}
