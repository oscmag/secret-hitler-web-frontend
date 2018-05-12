import initialAppState from './initial.state';

export const userReducer = (state = initialAppState.user, action) => {
  if (action.type === 'user_input') return {
    ...state,
    ...action.input
  };
  return state;
}