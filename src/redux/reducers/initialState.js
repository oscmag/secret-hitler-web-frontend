import { user, game} from './mocks';

const initUser = true;
const initGame = false;

export default {
  app: {
    gameId: 'xwfKQKPk0kK_tpxPAABy',
    modals: {
      rules: false,
      settings: false,
      showRoles: false,
      showFascists: false,
    }
  },
  game: initGame ? game : {},
  user: initUser ? user : {},
};