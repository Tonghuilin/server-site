import variable       from './variable';
import mq             from './mq';
import mixin          from './mixin';
import getGlobalStyle from './global';
import getTheme       from './theme';

export default (themeName) => {
    const theme  = {
        ...variable,
        ...mixin,
        mq,
        ...getTheme(themeName),
    };
    const global = getGlobalStyle({ theme });

    return {
        theme,
        global,
    };
};
