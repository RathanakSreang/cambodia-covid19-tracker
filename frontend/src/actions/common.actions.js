import Moment from 'moment';
import { updateIntl } from 'react-intl-redux';

import { commonConstants } from '../constants';
import { commonService } from '../services';
import {setLocale}         from '../store/locale';
import {getLocaleData}         from '../locale-data';

export function changeLanguage(lang) {
  return function(dispatch) {
    if(lang === 'km' || lang === 'en') {
      Moment.locale(lang);
      dispatch(updateIntl({
        locale: lang,
        messages: getLocaleData(lang)
      }));
      setLocale(lang);
    }
  }
}

export function toggleInstallApp(options) {
  return function(dispatch) {
    dispatch({type: commonConstants.TOGGLE_INSTALL_APP_BTN, payload: options});
  }
}

export function fetchDashboardData(options) {
  return function(dispatch) {
    dispatch({type: commonConstants.LOADING_DASHBOARD, payload: null});
    commonService.fetchDashboardData(options)
      .then((response) => {
        dispatch({type: commonConstants.DASHBOARD_LOADED, payload: response.data});
        dispatch({type: commonConstants.SYS_LOADING_COMPLETE, payload: null});
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: commonConstants.SYS_LOADING_COMPLETE, payload: null});
        dispatch({type: commonConstants.DASHBOARD_FAILED, payload: null});
      });

  }
}

export function getLinks(options) {
  return function(dispatch) {
    dispatch({type: commonConstants.LOADING_LINKS, payload: null});
    commonService.getLinks(options)
      .then((response) => {
        dispatch({type: commonConstants.LINKS_LOADED, payload: response.data});
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: commonConstants.LINKS_FAILED, payload: null});
      });
  }
}

export function getContacts(options) {
  return function(dispatch) {
    dispatch({type: commonConstants.LOADING_CONTACTS, payload: null});
    commonService.getContacts(options)
      .then((response) => {
        dispatch({type: commonConstants.CONTACTS_LOADED, payload: response.data});
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: commonConstants.CONTACTS_FAIL, payload: null});
      });
  }
}
