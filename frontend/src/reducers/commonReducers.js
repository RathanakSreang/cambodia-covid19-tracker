import { commonConstants } from '../constants';

export default function reducer(state={
    isOnline: false,
    isNewVersion: false,
    isOnboarding: true,
  }, action) {
    switch(action.type) {
      case (commonConstants.SYS_LOADING_COMPLETE): {
        return {
          ...state,
          isOnboarding: false
        };
      }

      default:
        return state;
    }
}
