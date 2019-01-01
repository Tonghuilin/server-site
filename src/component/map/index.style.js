import Styled      from '@emotion/styled';
import { pxToRem } from '../style/mixin';
import mq          from '../style/mq';

export const Wrapper = Styled.div`
    margin-top: ${pxToRem(-24)};
    
    ${mq.tablet} {
        margin-top: ${pxToRem(-56)};
    }
`;

export const MapWrapper = Styled.div(({ width, height }) => ({
    width:  pxToRem(width),
    height: pxToRem(height),
}));
