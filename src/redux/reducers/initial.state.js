const prefilledUser = false;

export default {
  app: {
    gameId: '',
    showRules: false,
    serverAlert: '',
    serverError: '',
  },
  game: {},
  user: {
    id: prefilledUser ? 'be24967c-3e1a-4c74-acd1-c66035ee4e85' : '',
    name: prefilledUser ? 'Heinrich Himmler' : '',
    avatar: prefilledUser ? '2' : '',
    games: {
      played: prefilledUser ? '10' : '',
      won: prefilledUser ? '4' : '',
    }
  },
};