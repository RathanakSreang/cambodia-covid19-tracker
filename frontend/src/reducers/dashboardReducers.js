import { commonConstants } from '../constants';

export default function reducer(state={
    summary: null,
    provinces: [],
    lastFetchAt: null,
    isFetching: false,
  }, action) {
    switch(action.type) {
      case (commonConstants.LOADING_DASHBOARD): {
        return {
          ...state,
          isFetching: true
        };
      }
      case (commonConstants.DASHBOARD_FAILED): {
        return {
          ...state,
          isFetching: false
        };
      }
      case (commonConstants.DASHBOARD_LOADED): {
        const {summary, provinces, last_fetch_at} = action.payload;
        return {
          ...state,
          summary: summary,
          provinces: provinces,
          lastFetchAt: last_fetch_at,
          isFetching: false
        };
      }

      default:
        return state;
    }
}
