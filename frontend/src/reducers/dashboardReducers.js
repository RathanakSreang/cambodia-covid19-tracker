import { commonConstants } from '../constants';

export default function reducer(state={
    summary: null,
    provinces: []
  }, action) {
    switch(action.type) {
      case (commonConstants.DASHBOARD_LOADED): {
        const {summary, provinces} = action.payload;
        return {
          ...state,
          summary: summary,
          provinces: provinces
        };
      }

      default:
        return state;
    }
}
