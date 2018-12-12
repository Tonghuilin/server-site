import React from 'react';
import ReactDOM from 'react-dom';
import App from './component';

// Set global variables in Node
require('./global');

// Render
if (isClient) {
  ReactDOM.hydrate(React.createElement(App), document.getElementById('App'));
}
