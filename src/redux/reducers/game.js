import initialAppState from './initialState';

export const game = (state = initialAppState.game, action) => {
  if (action.type === 'game_received') return action.payload;
  return state;
};