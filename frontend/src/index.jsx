import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
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
let isTooSoon = true;
window.addEventListener("beforeinstallprompt", function(e) {
  if (isTooSoon) {
    e.preventDefault(); // Prevents prompt display

    // deferredPrompt = e;
    //// Update UI notify the user they can install the PWA
    // showInstallPromotion();

    console.log('This is install app');
    // Prompt later instead:
    setTimeout(function() {
      isTooSoon = false;
      e.prompt(); // Throws if called more than once or default not prevented
    }, 10000);
  }
});

window.addEventListener('appinstalled', (evt) => {
  console.log('App is installed');
});
