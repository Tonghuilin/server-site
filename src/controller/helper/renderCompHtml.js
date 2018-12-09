const React                    = require('react');
const { renderToString }       = require('react-dom/server');
const { renderStylesToString } = require('emotion-server');

module.exports = (comp, props = {}) =>
    renderStylesToString(
        renderToString(
            React.createElement(comp, props),
        ),
    );
