import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

// Middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

export default store;
