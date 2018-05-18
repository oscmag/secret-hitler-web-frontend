import history from '../history';

const router = store => next => action => {
  next(action);
  if (action.type === 'game_received' && action.payload.message === 'showRoles')
    history.push('/board');
  else if (action.type === 'game_received' && action.payload.message === 'waitingForPlayers')
    history.push('/waiting-room');
  else if (history.pathname !== '/' && store.getState().game && !store.getState().game.id)
    history.push('/');
}

export default router;