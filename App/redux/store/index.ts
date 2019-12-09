import { createStore, applyMiddleware, compose } from 'redux';
import Sagas from '../sagas';
import createSagaMiddleware from 'redux-saga';
import reducers from '../ducks';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
middlewares.push(sagaMiddleware);

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(Sagas);
const persistor = persistStore(store);

export { store, persistor };
