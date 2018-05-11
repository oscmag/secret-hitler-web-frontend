import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import app from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<app />, document.getElementById('root'));
registerServiceWorker();
