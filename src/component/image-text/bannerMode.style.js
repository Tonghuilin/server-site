import Styled      from '@emotion/styled';
import { H2, Img } from '../style/typography';
import mq          from '../style/mq';

export const Title = Styled(H2)`
    margin: 1rem 0;
`;

export const TextWrapper = Styled.div`
    background-color: ${props => props.textBackgroundColor};
    width:     100%;
    text-align: center;
    padding:   ${props => props.theme.pxToRem(30)};
`;

export const ImageWrapper = Styled.div`
    height: ${props => props.theme.pxToRem(100)};
    overflow: hidden;
    position: relative;
    width: 100%;
    
    ${mq.tablet} {
        height: ${props => props.theme.pxToRem(300)};
    }
`;

export const Image = Styled(Img)`
    position:  absolute;
    top:       50%;
    left:      50%;
    transform: translate(-50%, -50%);
`;
