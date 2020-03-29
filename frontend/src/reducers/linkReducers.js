import { commonConstants } from '../constants';

export default function reducer(state={
    links: [],
  }, action) {
    switch(action.type) {
      case (commonConstants.LINKS_LOADED): {
        const {links} = action.payload;
        return {
          ...state,
          links: links,
        };
      }

      default:
        return state;
    }
}
