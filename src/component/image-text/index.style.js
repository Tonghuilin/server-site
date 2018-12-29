import Styled      from '@emotion/styled';
import mq          from '../style/mq';
import { pxToRem } from '../style/mixin';

export const Wrapper = Styled.div`
    background-color: ${props => props.backgroundColor};
`;

export const Body = Styled.div`
    font-weight: 100;
`;

export const ImageWrapper = Styled.div`
    background-color: ${props => props.imageBackgroundColor};
    background-image: ${props => `url(${props.url})`};
    background-position: center;
    background-size: cover;
    height: ${pxToRem(100)};
    overflow: hidden;
    width: 100%;
    
    ${mq.tablet} {
        height: ${pxToRem(300)};
    }
`;
