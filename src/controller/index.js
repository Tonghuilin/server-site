const renderCompHtml = require('./helper/renderCompHtml');
const { Home }       = require('../component/home/home');

const html = renderCompHtml(Home);

module.exports = {
    html,
};
