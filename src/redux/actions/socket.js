export const socketEmit = (data) => ({
  type: 'socket_emit',
  socket: data,
});