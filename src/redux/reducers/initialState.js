import { user, game } from './mocks';

const initUser = false;
const initGame = false;

export default {
  app: {
    gameId: '',
    modals: {
      rules: false,
      settings: false,
      showRoles: false,
      showFascists: false,
    }
  },
  game: initGame ? game : {},
  user: initUser ? user : {id: '', name: '', avatar: ''},
};