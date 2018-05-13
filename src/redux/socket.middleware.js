import io from 'socket.io-client';

const socket = store => next => action => {
  if(!action.socket) return next(action);

  const {message, payload} = action.socket;

  const socket = io(process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000');

  socket.on('metaChannel', game => {
    store.dispatch({
      type: action.type + '_success',
      game,
    })
  });

  socket.on('exception', err => {
    console.error(err);
    store.dispatch({
      type: action.type + '_failure',
      err,
    })
  });

  socket.emit('metaChannel', message, payload);

  next({
    ...action,
    type: action.type + '_pending'
  });
}

export default socket;