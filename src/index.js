const React    = require('react');
const ReactDOM = require('react-dom');
const App      = require('./component/index');

// Render
ReactDOM.hydrate(<App/>, document.getElementById('App'));
