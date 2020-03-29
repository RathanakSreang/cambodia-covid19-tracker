import { newsConstants } from '../constants';
import { newsService } from '../services';

export function fetchNewsList(options) {
  return function(dispatch) {
    newsService.fetchNewsList(options)
      .then((response) => {
        dispatch({type: newsConstants.NEWS_LIST_LOADED, payload: response.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
