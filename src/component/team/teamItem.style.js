import Styled            from '@emotion/styled';
import { pxToRem, rgba } from '../style/mixin';
import mq                from '../style/mq';

import { Wrapper as AvatarWrapper } from '../avatar/index.style';
import { Body as InfoBody }         from './teamItemInfo.style';

const getTranslateX = ({ index, reflective }) => {
    // add 1 offset to index for the reflective items
    const ind    = reflective ? index + 1 : index;
    const even   = ind % 2 === 0;
    const prefix = even ? '-' : '';

    return prefix + pxToRem(25);
};

export const Item = Styled.div`
    border-bottom: ${pxToRem(1)} solid ${props => rgba(props.theme.borderColor.common, 0.1)};
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
        cursor: ${props => props.hoverable ? 'pointer' : undefined};
        display: inline-block;
        padding: 0;
        position: relative;
    
        &:hover {
            ${InfoBody} {
                opacity: 1;
                visibility: visible;
            }
        }
    }
    
    ${AvatarWrapper} {
        flex-shrink: 0;
    }
`;
