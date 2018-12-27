import Color        from './color';
import { getMixin } from './mixin';
import logger       from '../helper/logger';

export const light = {
    font:            'Helvetica, Tahoma, Arial, STXihei, “华文细黑”, ' +
                     '“Microsoft YaHei”, “微软雅黑”, SimSun, “宋体”, Heiti, “黑体”, sans-serif',
    fontSize:        16,
    color:           {
        body:   Color.dune,
        button: Color.white,
        icon:   Color.dune,
    },
    backgroundColor: {
        body:   Color.white,
        button: Color.mantis,
        icon:   Color.mantis,
    },
    borderColor: {
        input: Color.mantis,
    },
};

export const dark = {
    font:            'Helvetica, Tahoma, Arial, STXihei, “华文细黑”, ' +
                     '“Microsoft YaHei”, “微软雅黑”, SimSun, “宋体”, Heiti, “黑体”, sans-serif',
    fontSize:        16,
    color:           {
        body:   Color.white,
        button: Color.white,
        icon:   Color.white,
    },
    backgroundColor: {
        body:   Color.dune,
        button: Color.mantis,
        icon:   Color.dune,
    },
    borderColor: {
        input: Color.mantis,
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
