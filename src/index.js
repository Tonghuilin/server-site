// config env variables
require('../config-env');

import React from 'react';
import ReactDOM from 'react-dom';

import { component, getProps } from './controller';

// Render
const render = async () => {
    const dom = document.getElementById('App');

    if (!process.env.IS_CLIENT || !Boolean(dom)) {
        return false;
    }

    if (process.env.IS_CLIENT) {
        const props = await getProps();

        ReactDOM.hydrate(
            React.createElement(component, props),
            dom,
        );

        return true;
    }
};

render();
