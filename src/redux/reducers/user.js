import initialAppState from './initialState';

export const user = (state = initialAppState.user, action) => {
  if (action.type === 'user_input') return {
    ...state,
    ...action.input,
  };
  return state;
}