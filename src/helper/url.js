const isArray  = require('lodash/isArray');
const isObject = require('lodash/isObject');

/**
 * format search object
 *
 * @param obj
 * @returns {string}
 */
const formatSearch = (obj = {}) => {
    if (!isObject(obj)) {
        throw new Error('Can not format search because it is not an object');
    }

    return Object
        .keys(obj)
        .reduce(
            (result, key) => {
                const value   = obj[key];

                // value doesn't equal to null/undefined/empty string, 0 not counted
                const isValid = Boolean(value) || value === 0;

                if (!isValid) {
                    return result;
                }

                if (isArray(value)) {
                    const seg = value.map((eachVal) => `${key}=${eachVal}`).join('&');
                    return result.concat(seg);
                }

                const val = typeof value === 'string' ? value : JSON.stringify(value);
                return result.concat(`${key}=${val}`);
            },
            [],
        )
        .join('&');
};

module.exports = {
    formatSearch,
};
