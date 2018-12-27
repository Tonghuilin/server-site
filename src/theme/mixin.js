export const pxToRem = (base = 16) => px => `${px / base}rem`;

/**
 * get mixin by selected theme object
 *
 * @param theme
 * @returns {{pxToRem: *}}
 */
export const getMixin = (theme) => {
    return {
        pxToRem: pxToRem(theme.fontSize),
    };
};
