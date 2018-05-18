import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer as notifReducer } from 'redux-notifications';

import * as reducers from './reducers';
import socketCreator from './middlewares/socket';
import router from './middlewares/router';
// import { loadState, saveState } from './localStorage';

// const persistedState = loadState();

const socket = socketCreator(process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    notifs: notifReducer,
    ...reducers,
  }),
  // persistedState,
  composeEnhancers(applyMiddleware(socket, router))
);

// store.subscribe(() => saveState(store.getState()));

export default store;