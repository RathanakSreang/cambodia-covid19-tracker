import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { batch, batching } from 'redux-batch-middleware';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { intlReducer } from 'react-intl-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import commonReducers from '../reducers/commonReducers';
import dialogReducers from '../reducers/dialogReducers';
import dashboardReducers from '../reducers/dashboardReducers';
import linkReducers from '../reducers/linkReducers';
import contactReducers from '../reducers/contactReducers';
import newsReducers from '../reducers/newsReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, batch];
const enhancers = composeEnhancers(applyMiddleware(...middleware));

const appReducer = combineReducers({
  commonReducers,
  dialogReducers,
  dashboardReducers,
  linkReducers,
  contactReducers,
  newsReducers,
  form: formReducer,
  intl: intlReducer,
});

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, batching(appReducer));
export default (initialState) => {
  const store = createStore(pReducer, initialState, enhancers);
  const persistor = persistStore(store);
  return { store, persistor }
};
