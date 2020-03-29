import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { batch, batching } from 'redux-batch-middleware';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { intlReducer } from 'react-intl-redux';

import commonReducers from '../reducers/commonReducers';
import currentUserReducers from '../reducers/currentUserReducers';
import dialogReducers from '../reducers/dialogReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, batch];
const enhancers = composeEnhancers(applyMiddleware(...middleware));

const appReducer = combineReducers({
  commonReducers,
  dialogReducers,
  currentUserReducers,
  form: formReducer,
  intl: intlReducer,
});

export default (initialState) => {
  let store = createStore(batching(appReducer), initialState, enhancers);
  return { store }
};
