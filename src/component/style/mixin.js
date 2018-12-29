import variable from './variable';
import Color    from 'color';

export const pxToRem = (base = 16) => px => {
    if (typeof px === 'string') {
        return px;
    }

    return `${px / base}rem`;
};

export default {
    pxToRem: pxToRem(variable.fontSize),
    darken:  (color, percentage) => Color(color).darken(percentage).hex(),
    lighten: (color, percentage) => Color(color).lighten(percentage).hex(),
};
