import Styled                       from '@emotion/styled';
import { H4, Button as BaseButton } from '../style/styled-component';
import { pxToRem }                  from '../style/mixin';
import mq                           from '../style/mq';

export const Wrapper = Styled.div`
    padding: ${pxToRem(16)} 0 ${pxToRem(24)};
    
    ${mq.tabletLandscape} {
        padding: ${pxToRem(30)} 0;
    }
`;

export const Heading = Styled(H4)`
    text-align: center;
`;

export const MapWrapper = Styled.div(({ failed, width, height }) => (failed ? {} : {
    width:  pxToRem(width),
    height: pxToRem(height),
}));

export const Button = Styled(BaseButton)`
    margin-left: ${pxToRem(2)};
    margin-bottom: ${pxToRem(2)};
    
    &:first-of-type {
        margin-left: 0;
    }
`;
