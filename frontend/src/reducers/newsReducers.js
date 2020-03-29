import { newsConstants } from '../constants';

export default function reducer(state={
    newsList: [],
    newsDetail: null
  }, action) {
    switch(action.type) {
      case (newsConstants.NEWS_LIST_LOADED): {
        const {news_list} = action.payload;
        return {
          ...state,
          newsList: news_list
        };
      }

      default:
        return state;
    }
}
