import Styled      from '@emotion/styled';
import { pxToRem } from '../style/mixin';

export const Wrapper = Styled.div`
    background-color: ${props => props.theme.backgroundColor.common};
    border: ${pxToRem(2)} solid ${props => (props.borderColor || props.theme.borderColor.common)};
    border-radius: ${pxToRem(10)};
    box-sizing: content-box;
    display: inline-block;
    overflow: hidden;
`;
