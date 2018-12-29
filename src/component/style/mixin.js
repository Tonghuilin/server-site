import variable from './variable';
import Color    from 'color';

export const pxToRemCompose = (base = 16) => px => {
    if (typeof px === 'string') {
        return px;
    }

    return `${px / base}rem`;
};

export const pxToRem = pxToRemCompose(variable.fontSize);

export const darken = (color, percentage) => Color(color).darken(percentage).hex();

export const lighten = (color, percentage) => Color(color).lighten(percentage).hex();

export default {
    pxToRem,
    darken,
    lighten,
};
