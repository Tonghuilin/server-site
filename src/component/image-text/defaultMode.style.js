import Styled                              from '@emotion/styled';
import { Content as BaseContent, H4, Img } from '../style/typography';
import mq          from '../style/mq';

export const Content = Styled(BaseContent)`
    ${mq.tablet} {
        display:         flex;
        flex-direction:  ${props => props.reverse ? 'row-reverse' : undefined};
        justify-content: space-between;
    }
`;

export const ImageWrapper = Styled.div`
    background-color: ${props => props.imageBackgroundColor};
    width: 100%;
    position: relative;
    overflow: hidden;
    height: ${props => props.theme.pxToRem(100)};

    ${mq.tablet} {
        flex-basis: 50%;
        flexShrink:  0;
        height: ${props => props.theme.pxToRem(300)};
        margin-right: ${props => props.reverse ? undefined : props.theme.pxToRem(16)};
        margin-left:  ${props => props.reverse ? props.theme.pxToRem(16) : undefined};
    }
`;

export const Image = Styled(Img)`
    position:  absolute;
    top:       50%;
    left:      50%;
    transform: translate(-50%, -50%);
`;

export const TextWrapper = Styled.div`
    background-color: ${props => props.textBackgroundColor};
    text-align: center;
    
    ${mq.tablet} {
        flex-basis: 100%;
        text-align: ${props => props.reverse ? 'left' : 'right'};
    }
`;

export const Title = Styled(H4)`
    margin: 1rem 0;
`;
