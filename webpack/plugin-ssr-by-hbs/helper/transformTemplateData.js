const renderCompHtml = require('./renderCompHtml');

/**
 * get the rendered html
 *
 * @param data
 * {{
 *     component
 *     props
 * }}
 * @returns {{html}}
 */
const renderHtml = ({ component, componentProps }) => {
    if (!component) {
        throw new Error('Cannot find component to render');
    }

    return renderCompHtml(component, componentProps);
};


/**
 * Transform template data: inject html, then omit component and props used to generate html
 *
 * @param data
 * @returns {string}
 */
const transformTemplateData = (data = {}) => {
    const result = {
        ...data,
        html: renderHtml(data),
    };

    return JSON.stringify(result);
};

module.exports = {
    transformTemplateData,
};
