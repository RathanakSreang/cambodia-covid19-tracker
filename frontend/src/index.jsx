import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Moment from 'moment';
import 'moment-timezone';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './style/index.scss';
// import 'react-image-lightbox/style.css';
import * as serviceWorker from './serviceWorker';
import { fetchDashboardData, getLinks, getContacts, toggleInstallApp }      from './actions/common.actions'
import {getLocale}           from './store/locale';
import {getLocaleData}         from './locale-data';

import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/km';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';

import LoadingPage from './screens/LoadingPage';

const localLang = getLocale();
const initialState = {
  intl: {
    defaultLocale: 'en',
    locale: localLang,
    messages: getLocaleData(localLang),
  },
};
Moment.locale(localLang);
export const {store, persistor} = configureStore(initialState);
store.dispatch(fetchDashboardData());
store.dispatch(getLinks());
store.dispatch(getContacts());

setInterval(function() {
  store.dispatch(fetchDashboardData());
  store.dispatch(getLinks());
  store.dispatch(getContacts());
}, 300000); //pull every 5 minutes

const jsx = (
  <Provider store={store}>
    <PersistGate loading={<LoadingPage />} persistor={persistor}>
      <IntlProvider>
        <AppRouter />
      </IntlProvider>
    </PersistGate>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register({
  onWaiting: function(worker) {
    // store.dispatch(toggleNewVersion({isNewVersion: true}));
    worker.waiting.postMessage({action: 'skipWaiting'});
  },
  onUpdate: function (worker) {
    worker.waiting.postMessage({action: 'skipWaiting'});
  },
  onSuccess: function(args) {}
});


// TODO help me make it better
window.addEventListener('beforeinstallprompt', (event) => {
  console.log('👍', 'beforeinstallprompt');
  // Stash the event so it can be triggered later.
  event.preventDefault();
  window.deferredPrompt = event;

  // trigger install display
  setTimeout(function() {
    console.log('isShowInstallBtn')
    if(window.deferredPrompt) {
      store.dispatch(toggleInstallApp({show: true}));
    }
  }, 3000);
});

window.addEventListener('appinstalled', (evt) => {
  // No need display install app
  console.log('👍', 'appinstalled');
  window.deferredPrompt = null;
  store.dispatch(toggleInstallApp({show: false}));
});
