import { newsConstants } from '../constants';

export default function reducer(state={
    newsList: [],
    newsDetail: null,
    isFetching: false
  }, action) {
    switch(action.type) {


      case (newsConstants.LOADING_NEWS_LIST): {
        return {
          ...state,
          isFetching: true
        };
      }
      case (newsConstants.NEWS_LIST_FAILED): {
        return {
          ...state,
          isFetching: false
        };
      }
      case (newsConstants.NEWS_LIST_LOADED): {
        const {news_list} = action.payload;
        return {
          ...state,
          newsList: news_list,
          isFetching: false
        };
      }

      default:
        return state;
    }
}
