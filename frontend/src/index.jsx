import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import Moment from 'moment';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './style/index.scss';
// import 'react-image-lightbox/style.css';
import * as serviceWorker from './serviceWorker';
import { fetchDashboardData, getLinks, getContacts }      from './actions/common.actions'
import {getLocale}           from './store/locale';
import {getLocaleData}         from './locale-data';

import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/km';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';

const localLang = getLocale();
const initialState = {
  intl: {
    defaultLocale: 'en',
    locale: localLang,
    messages: getLocaleData(localLang),
  },
};
Moment.locale(localLang);
export const {store} = configureStore(initialState);
store.dispatch(fetchDashboardData());
store.dispatch(getLinks());
store.dispatch(getContacts());

const jsx = (
  <Provider store={store}>
    <IntlProvider>
      <AppRouter />
    </IntlProvider>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
