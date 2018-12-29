import colors   from './color';
import logger   from '../../helper/logger';

export const light = {
    color:           {
        common: colors.white,
        body:   colors.dune,
        button: colors.white,
        icon:   colors.dune,
        a:      colors.celery,
    },
    backgroundColor: {
        common: colors.celery,
        body:   colors.white,
        button: colors.mantis,
        icon:   colors.mantis,
    },
    borderColor:     {
        common: colors.mantis,
        input:  colors.mantis,
    },
};

export const dark = {
    color:           {
        common: colors.white,
        body:   colors.white,
        button: colors.white,
        icon:   colors.white,
        a:      colors.celery,
    },
    backgroundColor: {
        common: colors.celery,
        body:   colors.dune,
        button: colors.mantis,
        icon:   colors.dune,
    },
    borderColor:     {
        common: colors.mantis,
        input:  colors.mantis,
    },
};

const allThemes = {
    light,
    dark,
};

export default (themeName) => {
    const selectedTheme = allThemes[themeName] || allThemes.light;

    if (!selectedTheme) {
        logger.info(`theme [${themeName}] not found. Fall back to [light] `);
    }

    return selectedTheme;
};
