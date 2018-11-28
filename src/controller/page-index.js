const React              = require('react');
const { renderToString } = require('react-dom/server');
const { Home }           = require('../component/home');

const content = renderToString(<Home/>);

module.exports = {
    title:   'Home page',
    content,
};
