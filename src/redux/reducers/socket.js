import intialAppState from './initial.state';

export const singlePersonView = (state = intialAppState.socket, action) => {
  switch (action.type) {
    case 'new_game_state':
    return action.game;
    default:
    return state;
  }
};