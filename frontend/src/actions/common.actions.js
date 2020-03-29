import { commonConstants } from '../constants';
import { commonService } from '../services';

export function fetchingData() {
  return function(dispatch) {
    dispatch({type: commonConstants.FETCHING_DATA, payload: null});
  }
}

export function fetchedData() {
  return function(dispatch) {
    dispatch({type: commonConstants.FETCHED_DATA, payload: null});
  }
}

export function fetchDashboardData(options) {
  return function(dispatch) {
    dispatch(fetchingData());
    commonService.fetchDashboardData(options)
      .then((response) => {
        dispatch({type: commonConstants.DASHBOARD_LOADED, payload: response.data});
        dispatch({type: commonConstants.SYS_LOADING_COMPLETE, payload: null});
        dispatch(fetchedData());
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: commonConstants.SYS_LOADING_COMPLETE, payload: null});
        dispatch(fetchedData());
      });

  }
}

export function getLinks(options) {
  return function(dispatch) {
    dispatch(fetchingData());
    commonService.getLinks(options)
      .then((response) => {
        dispatch({type: commonConstants.LINKS_LOADED, payload: response.data});
        dispatch(fetchedData());
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchedData());
      });
  }
}

export function getContacts(options) {
  return function(dispatch) {
    dispatch(fetchingData());
    commonService.getContacts(options)
      .then((response) => {
        dispatch({type: commonConstants.CONTACTS_LOADED, payload: response.data});
        dispatch(fetchedData());
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchedData());
      });
  }
}
