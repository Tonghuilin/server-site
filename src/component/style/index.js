import styleVariable from './variable';
import styleMq       from './mq';
import styleMixin    from './mixin';
import styledComp    from './styled-component';
import styleGetTheme from './theme';

export const variable        = styleVariable;
export const mq              = styleMq;
export const mixin           = styleMixin;
export const styledComponent = styledComp;
export const getTheme        = styleGetTheme;

export default {
    variable,
    mq,
    mixin,
    styledComponent,
    getTheme,
};
