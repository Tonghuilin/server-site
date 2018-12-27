import colors       from './color';
import { getMixin } from './mixin';
import logger       from '../helper/logger';

export const common = {
    font:            'Helvetica, Tahoma, Arial, STXihei, “华文细黑”, ' +
                     '“Microsoft YaHei”, “微软雅黑”, SimSun, “宋体”, Heiti, “黑体”, sans-serif',
    fontSize:        16,
    transitionStyle: 'cubic-bezier(.88,.01,.68,1)',
    transitionTime:  '0.2s',
    transition:      `0.2s cubic-bezier(.88,.01,.68,1)`,
};

export const light = {
    ...common,
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
    ...common,
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

    return {
        ...selectedTheme,
        ...getMixin(selectedTheme),
    };
};
