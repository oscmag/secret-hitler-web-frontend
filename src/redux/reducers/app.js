import initialAppState from './initial.state';

export const appReducer = (state = initialAppState.app, action) => {
  switch (action.type) {
    case 'toggle_show_rules':
    return {
      ...state,
      showRules: !state.showRules,
    };
    case 'update_game_id':
    return {
      ...state,
      ...action.input,
    };
    case 'server_alert':
    return {
      ...state,
      serverAlert: action.alert,
    };
    case 'server_error':
    return {
      ...state,
      serverError: action.error,
    };
    default:
      return state;
  }
};