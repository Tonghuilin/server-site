import variable from './variable';
import Color    from 'color';

export const pxToRemCompose = (base = 16) => px => {
    const reg = new RegExp('^[0-9]+$');

    if (typeof px === 'string' && !reg.test(px)) {
        return px;
    }

    return `${Number(px) / base}rem`;
};

export const pxToRem = pxToRemCompose(variable.fontSize);

export const darken = (color, percentage) => Color(color).darken(percentage).hex();

export const lighten = (color, percentage) => Color(color).lighten(percentage).hex();

export const rgba = (...args) => {
    if (args.length === 2) {
        const color      = Color(args[0]);
        const percentage = args[1];

        return `rgba(${color.red()}, ${color.green()}, ${color.blue()}, ${percentage})`;
    }

    return `rgba(${args[0]}, ${args[1]}, ${args[2]}, ${args[4]})`;
};

export default {
    pxToRem,
    darken,
    lighten,
    rgba,
};
