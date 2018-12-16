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


/**
 * prepare Hbs template data: inject html, then omit component and props used to generate html
 *
 * @param data
 * {{
 *     component
 *     componentProps
 * }}
 * @returns {string}
 */
const prepareHbsTemplateData = (data = {}) => {
    const result = {
        ...data,
        html: trySsr(data),
    };

    return JSON.stringify(result);
};

module.exports = {
    prepareHbsTemplateData,
};
