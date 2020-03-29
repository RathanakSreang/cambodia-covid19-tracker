import { commonConstants } from '../constants';
import { commonService } from '../services';

export function fetchDashboardData(options) {
  return function(dispatch) {
    commonService.fetchDashboardData(options)
      .then((response) => {
        dispatch({type: commonConstants.DASHBOARD_LOADED, payload: response.data});
        dispatch({type: commonConstants.SYS_LOADING_COMPLETE, payload: null});
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: commonConstants.SYS_LOADING_COMPLETE, payload: null});
      });

  }
}

export function getLinks(options) {
  return function(dispatch) {
    commonService.getLinks(options)
      .then((response) => {
        dispatch({type: commonConstants.LINKS_LOADED, payload: response.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function getContacts(options) {
  return function(dispatch) {
    commonService.getContacts(options)
      .then((response) => {
        dispatch({type: commonConstants.CONTACTS_LOADED, payload: response.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
