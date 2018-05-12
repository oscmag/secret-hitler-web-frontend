import initialAppState from './initial.state';

export const gameReducer = (state = initialAppState.game, action) => {
  if (action.type === 'socket_event_success') return action.game;
  return state;
};