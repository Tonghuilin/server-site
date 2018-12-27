import Color from 'color';

export const pxToRem = (base = 16) => px => {
    if (typeof px === 'string') {
        return px;
    }

    return `${px / base}rem`;
};

/**
 * get mixin by selected theme object
 *
 * @param theme
 * @returns {{pxToRem: *}}
 */
export const getMixin = (theme) => {
    return {
        pxToRem: pxToRem(theme.fontSize),
        darken:  (color, percentage) => Color(color).darken(percentage).hex(),
        lighten: (color, percentage) => Color(color).lighten(percentage).hex(),
    };
};
