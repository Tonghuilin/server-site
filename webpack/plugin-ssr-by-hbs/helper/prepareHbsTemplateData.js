const ssr = require('./ssr');

/**
 * server side rendering react component string
 *
 * @param data
 * {{
 *     component
 *     componentProps
 * }}
 * @returns {{html}}
 */
const trySsr = ({ component, componentProps }) => {
    if (!component) {
        throw new Error('Cannot find component to render');
    }

    return ssr(component, componentProps);
};

const makeHeadData = ({ componentProps }) => ({
    title: componentProps.title,
});

const makeFootData = ({ componentProps }) => ({
    keyBMap: process.env.KEY_BMAP,
});

/**
 * prepare Hbs template data: inject html, then omit component and props used to generate html
 *
 * @param data
 * {{
 *     component
 *     componentProps
 * }}
 * @returns {{html}}
 */
const prepareHbsTemplateData = (data = {}) => {
    const result = {
        head: makeHeadData(data),
        html: trySsr(data),
        foot: makeFootData(data),
    };

    return result;
};

module.exports = {
    prepareHbsTemplateData,
};
