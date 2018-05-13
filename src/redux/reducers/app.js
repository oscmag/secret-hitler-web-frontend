import initialAppState from './initial.state';

export const appReducer = (state = initialAppState.app, action) => {
  if (action.type === 'toggle_show_rules') return {
    ...state,
    showRules: !state.showRules,
  };
  if (action.type === 'update_game_id') return {
    ...state,
    ...action.input,
  };
  return state;
};