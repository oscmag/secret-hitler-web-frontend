import { combineReducers } from 'redux';

import { appReducer } from './app';
import { gameReducer } from './game';
import { userReducer } from './user';

export default combineReducers({
  app: appReducer,
  game: gameReducer,
  user: userReducer,
});