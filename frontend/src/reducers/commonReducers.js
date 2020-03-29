import { commonConstants } from '../constants';

export default function reducer(state={
    isFetching: 0,
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

      case (commonConstants.FETCHING_DATA): {
        return {
          ...state,
          isFetching: state.isFetching + 1
        };
      }

      case (commonConstants.FETCHED_DATA): {
        return {
          ...state,
          isFetching: state.isFetching - 1
        };
      }

      default:
        return state;
    }
}
