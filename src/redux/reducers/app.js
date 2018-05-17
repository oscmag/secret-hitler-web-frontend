import initialAppState from './initialState';

export const app = (state = initialAppState.app, action) => {
  switch (action.type) {
    case 'toggle_modal':
    return {
      ...state,
      modals: {
        ...state.modals,
        [action.name]: !state.modals[action.name],
      }
    };
    case 'game_received':
    return action.payload.message ? {
      ...state,
      modals: {
        ...state.modals,
        [action.payload.message]: true,
      }
    } : state;
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