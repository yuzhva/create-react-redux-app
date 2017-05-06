import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from './store';

import App from './App';

const routes = (
  <ConnectedRouter history={history}>
    <Route path="/" component={App}/>
  </ConnectedRouter>
);
export default routes;
