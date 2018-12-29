import logger         from '../../../helper/logger';
import light          from './light';
import dark           from './dark';
import getGlobalStyle from '../global';
import mixin          from '../mixin';
import mq             from '../mq';

const allThemes = { light, dark };

/**
 * select theme by theme name
 *
 * @param themeName
 * @returns {{color, backgroundColor, borderColor}}
 */
const selectTheme = (themeName) => {
    const selectedTheme = allThemes[themeName] || allThemes.light;

    if (!selectedTheme) {
        logger.log(`theme [${themeName}] not found. Fall back to [light] `);
    }

    return selectedTheme;
};

/**
 * theme:   for emotion <ThemeProvide/>
 * global:  for emotion <Global/>
 *
 * @param themeName
 * @returns {{theme: {color, backgroundColor, borderColor, mixin: {pxToRem, darken, lighten}, mq}, global: {body:
 *     SerializedStyles, all: SerializedStyles}}}
 */
export default (themeName) => {
    const theme  = selectTheme(themeName);
    const global = getGlobalStyle({ theme });

    return {
        theme: {
            ...theme,
            mixin,
            mq,
        },
        global,
    };
};
