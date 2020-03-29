import { dialogConstants } from '../constants';

export default function reducer(state={
    changePasswordDialogOpen: false,
    registerDialogOpen: false,
    authDialogOpen: false,
    changeLanguageDialogOpen: false,
    courseDrawerOepn: false
  }, action) {
    switch(action.type) {
      case (dialogConstants.CHANGE_PASSWORD_DIALOG_TOGGLE): {
        const {open} = action.payload;
        return {
          ...state,
          changePasswordDialogOpen: open
        };
      }

      case (dialogConstants.REGISTER_DIALOG_TOGGLE): {
        const {open} = action.payload;
        return {
          ...state,
          registerDialogOpen: open
        };
      }

      case (dialogConstants.AUTH_DIALOG_TOGGLE): {
        const {open} = action.payload;
        return {
          ...state,
          authDialogOpen: open
        };
      }

      case (dialogConstants.CHANGE_LANGUAGE_TOGGLE): {
        const {open} = action.payload;
        return {
          ...state,
          changeLanguageDialogOpen: open
        };
      }

      case (dialogConstants.COURSE_DRAWER_TOGGLE): {
        const {open} = action.payload;
        return {
          ...state,
          courseDrawerOepn: open
        };
      }

      default:
        return state;
    }
}
