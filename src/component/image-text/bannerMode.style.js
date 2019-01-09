import Styled                               from '@emotion/styled';
import { Content as BaseContent, H2 }       from '../style/styled-component';
import { pxToRem }                          from '../style/mixin';
import { ImageWrapper as BaseImageWrapper } from './index.style';
import mq                                   from '../style/mq';

export const Title = Styled(H2)`
    margin: 1rem 0;
`;

export const ImageWrapper = Styled(BaseImageWrapper)`
    background-position-y: 102%;
    background-repeat: repeat no-repeat;
    background-size: ${pxToRem(150)};
    background-color: ${props => (props.imageBackgroundColor || props.theme.backgroundColor.banner)};
    
    ${mq.tablet} {
        background-size: ${pxToRem(300)};   
    }
    
    ${mq.desktop} {
        background-size: ${pxToRem(450)};
    }
`;

export const TextWrapper = Styled.div`
    background-color: ${props => props.textBackgroundColor || props.theme.backgroundColor.common};
    width:     100%;
    text-align: center;
    padding:   ${pxToRem(30)};
`;

export const ImageContent = Styled(BaseContent)`
    display: flex;
    height: 100%;
    justify-content: space-between;
`;

export const ImageLeft = Styled.div`
    flex-basis: ${pxToRem(70)};
    flex-shrink: 0;
    position: relative;
    
    svg {
        transform: translateY(${pxToRem(19)});
    }
    
    ${mq.tablet} {
        flex-basis: ${pxToRem(170)};
        
        svg {
            transform: translateY(${pxToRem(75)});
        }
    }
`;

export const ImageMiddle = Styled.div`
    flex-basis: 100%;
    position: relative;

    animation: rise-set 12s infinite;
    animation-timing-function: linear;
`;

export const ImageRight = Styled.div`
    flex-basis: ${pxToRem(140)};
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    
    svg {
        transform: translateY(${pxToRem(7)});
    }
    
    ${mq.tablet} {
        flex-basis: ${pxToRem(260)};
        
        svg {
            transform: translateY(${pxToRem(70)});
        }
    }
`;
