import io from 'socket.io-client';

const socket = store => next => action => {
  if(!action.socket) return next(action);

  const { message, payload } = action.socket;

  const socket = io(process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000');

  socket.on('metaChannel', game => {
    store.dispatch({
      type: action.type + '_success',
      game,
    })
  });

  socket.on('exception', error => {
    console.error(error);
    store.dispatch({
      type: 'server_error',
      error,
    })
  });

  socket.on('alert', alert => {
    store.dispatch({
      type: 'server_alert',
      alert,
    })
  });

  socket.emit('metaChannel', message, payload);

  next({
    ...action,
    type: action.type + '_pending'
  });
}

export default socket;