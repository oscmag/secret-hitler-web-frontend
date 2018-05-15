import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';
import socketCreator from './middlewares/socket';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const socket = socketCreator(process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(socket))
);

store.subscribe(() => saveState(store.getState()));

export default store;