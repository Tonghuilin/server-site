import Styled            from '@emotion/styled';
import { pxToRem, rgba } from '../style/mixin';

export const Wrapper = Styled.div`
    background-color: ${props => props.theme.backgroundColor.common};
    border: ${pxToRem(2)} solid ${props => rgba(props.borderColor || props.theme.borderColor.common, 0.2)};
    border-radius: ${pxToRem(10)};
    box-sizing: content-box;
    display: inline-block;
    overflow: hidden;
`;
