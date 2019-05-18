import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './js/redux/store';
import './styles/index.scss';

require('es6-promise').polyfill();
require('isomorphic-fetch');

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
