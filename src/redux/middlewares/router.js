import history from '../history';

const router = store => next => action => {
  next(action);
  if (action.type === 'game_received' && action.payload.message === 'showRoles')
    history.push('/board');
}

export default router;