import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

import movies from '../reducers/movieReducer';

export default createStore(
  combineReducers({
    movies,
  }),
  {},
  compose(
    applyMiddleware(createLogger(), thunk),
    offline(offlineConfig)
  )
);
