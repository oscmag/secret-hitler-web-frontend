import initialAppState from './initial.state';

export const gameReducer = (state = initialAppState.game, action) => {
  if (action.type === 'game_received') return action.payload;
  return state;
};