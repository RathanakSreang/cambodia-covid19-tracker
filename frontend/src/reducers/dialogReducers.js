import { dialogConstants } from '../constants';

export default function reducer(state={
    newDrawerOepn: false
  }, action) {
    switch(action.type) {
      case (dialogConstants.TOGGLE_NEWS_DRAWER): {
        const {open} = action.payload;
        return {
          ...state,
          newDrawerOepn: open
        };
      }

      default:
        return state;
    }
}
