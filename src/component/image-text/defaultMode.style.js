import Styled                               from '@emotion/styled';
import { Content as BaseContent, H4, Img }  from '../style/styled-component';
import mq                                   from '../style/mq';
import { pxToRem }                          from '../style/mixin';
import { ImageWrapper as ImageWrapperBase } from './index.style';

export const Content = Styled(BaseContent)`
    ${mq.tablet} {
        display:         flex;
        flex-direction:  ${props => props.reverse ? 'row-reverse' : undefined};
        justify-content: space-between;
    }
`;

export const ImageWrapper = Styled(ImageWrapperBase)`
    ${mq.tablet} {
        flex-basis: 50%;
        flex-shrink:  0;
        height: ${pxToRem(300)};
        margin-right: ${props => props.reverse ? undefined : pxToRem(16)};
        margin-left:  ${props => props.reverse ? pxToRem(16) : undefined};
    }
`;

export const Image = Styled(Img)`
    position:  absolute;
    top:       50%;
    left:      50%;
    transform: translate(-50%, -50%);
`;

export const TextWrapper = Styled.div`
    background-color: ${props => props.textBackgroundColor || 'transparent'};
    text-align: center;
    
    ${mq.tablet} {
        flex-basis: 100%;
        text-align: ${props => props.reverse ? 'left' : 'right'};
    }
`;

export const Title = Styled(H4)`
    margin: 1rem 0;
`;
