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
    default:
      return state;
  }
};