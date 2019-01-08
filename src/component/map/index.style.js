import Styled                                   from '@emotion/styled';
import { H4, Button as BaseButton } from '../style/styled-component';
import { pxToRem }                              from '../style/mixin';

export const Wrapper = Styled.div`
    padding: ${pxToRem(24)} 0 ${pxToRem(8)};
`;

export const Heading = Styled(H4)`
    margin: 0;
    text-align: center;
`;

export const MapWrapper = Styled.div(({ width, height }) => ({
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
