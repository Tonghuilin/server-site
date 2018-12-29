import variable    from './variable';
import { pxToRem } from './mixin';

const { breakpoint } = variable;

export const mq = Object
    .keys(breakpoint)
    .reduce(
        (mq, key) => ({
            ...mq,
            [key]: `@media (min-width: ${pxToRem(breakpoint[key])})`,
        }),
        {},
    );

export default mq;
