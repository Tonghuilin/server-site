const renderCompHtml = require('./helper/renderCompHtml');
const { Home }       = require('../component/home/home');

const content = renderCompHtml(Home);

module.exports = {
    title: 'Home page',
    content,
};
