import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './../store';
import routes from './../routes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>{routes}</Provider>, div);
});
