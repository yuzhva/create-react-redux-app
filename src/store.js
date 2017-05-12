import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';

import createGlobalReducer from './global-reducer';

export const history = createHistory();

// Middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(
  createGlobalReducer(),
  applyMiddleware(middleware),
);

export default store;
