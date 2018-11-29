import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import App from './components/main_components/App';
import history from './history';

console.log(App);

render((
  <Router history={history}>
    <App />
  </Router>
), document.getElementById('root'));
