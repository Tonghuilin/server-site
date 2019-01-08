import Styled      from '@emotion/styled';
import { H6 }      from '../style/styled-component';
import { pxToRem } from '../style/mixin';
import mq          from '../style/mq';
import vars        from '../style/variable';

export const Wrapper = Styled.div`
    display: flex;
    margin-left: ${pxToRem(6)};
    
    ${mq.tablet} {
        display: block;
        margin-left: 0;
    }
`;

export const Heading = Styled(H6)`
    margin: 0;
`;

export const Title = Styled.div`
    margin-right: ${pxToRem(5)};
`;

export const Body = Styled.div`
    ${mq.tablet} {
        height: ${pxToRem(72)};
        left: ${pxToRem(72)};
        opacity: 0;
        padding-left: ${pxToRem(16)};
        position: absolute;
        transition: opacity ${vars.transition};
        top: ${pxToRem(2)};
        visibility: hidden;
        width: ${pxToRem(200)};
        
        &::before {
            background-color: ${props => props.theme.backgroundColor.common};
            content: '';
            display: block;
            height: ${pxToRem(10)};
            left: ${pxToRem(12)};
            position: absolute;
            top: ${pxToRem(15)};
            transform: rotate(45deg);
            width: ${pxToRem(10)};
        }
    }
`;

export const BodyInner = Styled.div`
    ${mq.tablet} {
        background-color: ${props => props.theme.backgroundColor.common};
        border-radius: ${pxToRem(5)};
        padding: ${pxToRem(10)};
        text-align: left;
    }
`;
