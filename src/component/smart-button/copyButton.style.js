import Styled            from '@emotion/styled';
import { ReverseButton } from '../style/styled-component';
import { pxToRem, rgba }       from '../style/mixin';

export const TextButton = Styled(ReverseButton)`
    border-bottom: ${pxToRem(1)} solid ${props => rgba(props.theme.borderColor.common, 0.1)};
    border-radius: 0;
    height: ${pxToRem(32)};
    padding: ${pxToRem(5)};
    width: auto;
    
    svg {
        height: 70%;
        width: auto;
        margin-left: ${pxToRem(5)};
    }
`;

export const Button = Styled(ReverseButton)`
    height: ${pxToRem(32)};
    padding: ${pxToRem(5)};
    width: ${pxToRem(32)};
`;

export const Text = Styled.span`
`;
