import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; // Before
import App from './containers/App'; // After
import reportWebVitals from './reportWebVitals';

import 'tachyons';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

reportWebVitals();
