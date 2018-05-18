import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Notifs } from 'redux-notifications';

import App from './App';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <App/>
      <Notifs/>
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
