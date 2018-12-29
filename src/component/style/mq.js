import variable    from './variable';
import { pxToRem } from './mixin';

const { breakpoint, fontSize } = variable;

export const mq = Object
    .keys(breakpoint)
    .reduce(
        (mq, key) => ({
            ...mq,
            [key]: `@media (min-width: ${pxToRem(fontSize)(breakpoint[key])})`,
        }),
        {},
    );

export default mq;
