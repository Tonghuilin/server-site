import React from 'react';
import ReactDOM from 'react-dom';
import App from './component';

// Set global variables in Node
require('./global');

const getProps = (appDom) => {
    const appProps = appDom.getAttribute('data-props');

    if (appProps) {
        try {
            return JSON.parse(appProps);
        } catch (err) {
            console.log('data-props is an invalid JSON', err);
        }
    }
};

// Render
const dom   = document.getElementById('App');
const props = getProps(dom);

if (isClient) {
    ReactDOM.hydrate(React.createElement(App, props), dom);
}
