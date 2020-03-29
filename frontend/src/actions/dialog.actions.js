import { dialogConstants } from '../constants';

export function toggleNewsDrawer(options) {
  return function(dispatch) {
    dispatch({
      type: dialogConstants.TOGGLE_NEWS_DRAWER,
      payload: options
    });
  }
}
