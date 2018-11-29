// // PACKAGE DEPENDENCIES
// import React from 'react';
// import ReactDOM from 'react-dom';

// // COMPONENTS

// import Search from './components/pages/Search';

// // STYLES

// import 'normalize.css';
import './sass/main_global.scss';


// ReactDOM.render(<Search />, document.getElementById('root'));
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import Main from './components/main_components/Main';
import history from './history';

// console.log(App);

render((
    <Router history={history}>
        <Main />
    </Router>
), document.getElementById('root'));
