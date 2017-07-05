import { fork, all } from 'redux-saga/effects';

import appSagas from './containers/App/sagas';

const sagas = [
  appSagas,
  // NOTE: put other app sagas here
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
