import { createStore, applyMiddleware, compose } from 'redux';
import Sagas from '../sagas';
import createSagaMiddleware from 'redux-saga';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import reducers from '../ducks';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
middlewares.push(sagaMiddleware);

const store = createStore(
  reducers,
  compose(applyMiddleware(...middlewares), offline(offlineConfig)),
);

sagaMiddleware.run(Sagas);

export default store;
