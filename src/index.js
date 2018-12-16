import React from 'react';
import ReactDOM from 'react-dom';

import { component, getProps } from './controller';

// Set global variables in Node
require('./global');

// Render
const render = async () => {
    const dom = document.getElementById('App');

    if (!isClient || !Boolean(dom)) {
        return false;
    }

    if (isClient) {
        const props = await getProps();

        ReactDOM.hydrate(
            React.createElement(component, props),
            dom,
        );

        return true;
    }
};

render();
