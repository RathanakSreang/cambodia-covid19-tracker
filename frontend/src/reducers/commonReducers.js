import { commonConstants } from '../constants';

export default function reducer(state={
    isOnline: false,
    isNewVersion: false,
    isOnboarding: true,
    isShowInstallBtn: false
  }, action) {
    switch(action.type) {
      case (commonConstants.SYS_LOADING_COMPLETE): {
        return {
          ...state,
          isOnboarding: false
        };
      }

      case (commonConstants.TOGGLE_INSTALL_APP_BTN): {
        const {show} = action.payload;
        return {
          ...state,
          isShowInstallBtn: show
        };
      }

      default:
        return state;
    }
}
