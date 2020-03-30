import { commonConstants } from '../constants';

export default function reducer(state={
    links: [],
    isFetching: false,
  }, action) {
    switch(action.type) {
      case (commonConstants.LOADING_LINKS): {
        return {
          ...state,
          isFetching: true
        };
      }
      case (commonConstants.LINKS_FAILED): {
        return {
          ...state,
          isFetching: false
        };
      }
      case (commonConstants.LINKS_LOADED): {
        const {links} = action.payload;
        return {
          ...state,
          links: links,
          isFetching: false
        };
      }

      default:
        return state;
    }
}
