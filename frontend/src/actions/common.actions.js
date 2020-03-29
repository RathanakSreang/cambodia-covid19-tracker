import Moment from 'moment';
import { updateIntl } from 'react-intl-redux';

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
