import { dialogConstants } from '../constants';

export default function reducer(state={
    newDrawerOpen: false
  }, action) {
    switch(action.type) {
      case (dialogConstants.TOGGLE_NEWS_DRAWER): {
        const {open} = action.payload;
        return {
          ...state,
          newDrawerOpen: open
        };
      }

      default:
        return state;
    }
}
