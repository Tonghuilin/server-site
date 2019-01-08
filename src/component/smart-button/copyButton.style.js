import Styled            from '@emotion/styled';
import { ReverseButton } from '../style/styled-component';
import { pxToRem }       from '../style/mixin';

export const TextButton = Styled(ReverseButton)`
    border-radius: 0;
    height: ${pxToRem(32)};
    padding: ${pxToRem(5)};
    width: auto;
    
    svg {
        height: 70%;
        width: auto;
        margin-left: ${pxToRem(5)};
        position: relative;
        top: ${pxToRem(2)};
    }
`;

export const Button = Styled(ReverseButton)`
    height: ${pxToRem(32)};
    padding: ${pxToRem(5)};
    width: ${pxToRem(32)};
`;

export const Text = Styled.span`
`;
