import Styled      from '@emotion/styled';
import mq          from '../style/mq';
import { pxToRem } from '../style/mixin';

export const Wrapper = Styled.div`
    background-color: ${props => props.backgroundColor};
`;

export const Body = Styled.div`
`;

export const ImageWrapper = Styled.div`
    background-color: ${props => (props.imageBackgroundColor || 'transparent')};
    background-image: ${props => `url(${props.url})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: ${pxToRem(100)};
    width: 100%;
    
    ${mq.tablet} {
        height: ${pxToRem(300)};
    }
`;
