const React                    = require('react');
const { renderToString }       = require('react-dom/server');
const { renderStylesToString } = require('emotion-server');

/**
 * Server side rendering a component (compatible with "emotion")
 *
 * @param comp
 * @param props
 * @returns {string}
 */
module.exports = (comp, props = {}) =>
    renderStylesToString(
        renderToString(
            React.createElement(comp, props),
        ),
    );
