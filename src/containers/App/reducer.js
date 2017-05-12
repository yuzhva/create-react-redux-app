import { fromJS } from 'immutable';

import {
  GET_API_DATA,
  GET_API_DATA_LOADED,
  GET_API_DATA_ERROR,
} from './constants';

const initialState = fromJS({
  apiData: false,
  apiDataLoading: false,
  apiDataLoaded: false,
  apiDataError: false,
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_DATA:
      return state
        .set('apiDataLoading', true)
        .set('apiDataError', false);
    case GET_API_DATA_LOADED:
      return state
        .set('apiData', action.data)
        .set('apiDataLoading', false)
        .set('apiDataLoaded', true)
        .set('apiDataError', false);
    case GET_API_DATA_ERROR:
      return state
        .set('apiDataLoading', false)
        .set('apiDataLoaded', false)
        .set('apiDataError', action.error);
    default:
      return state;
  }
};

export default appReducer;
