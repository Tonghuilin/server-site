import Styled      from '@emotion/styled';
import { pxToRem, lighten } from '../style/mixin';
import mq          from '../style/mq';

const getTranslateX = ({ index, reflective }) => {
    // add 1 offset to index for the reflective items
    const ind    = reflective ? index + 1 : index;
    const even   = ind % 2 === 0;
    const prefix = even ? '-' : '';

    return prefix + pxToRem(25);
};

export const Item = Styled.div`
    border-bottom: ${pxToRem(2)} solid ${props => lighten(props.theme.borderColor.common, 0.1)};
    margin-bottom: ${pxToRem(12)};

    ${mq.tablet} {
        border-bottom: none;
        margin-bottom: ${pxToRem(8)};
        transform: translateX(${getTranslateX});
    }
    
    &:last-of-type {
        border-bottom: none;
        margin-bottom: 0;
    }
`;

export const ItemInner = Styled.div`
    align-items: flex-start;
    display: flex;
    padding: ${pxToRem(10)};
    
    ${mq.tablet} {
        animation: float 8s infinite;
        animation-delay: ${({ index }) => index * 0.8}s;
        display: inline-block;
        padding: 0;
    }
`;
