import Styled      from '@emotion/styled';
import { pxToRem } from '../../style/mixin';

export const Button = Styled.button`
    background-color: inherit;
    border: none;
    padding: 0;
    position: absolute;
    right: ${pxToRem(12)};
    top: ${pxToRem(-24)};
    z-index: 2;
`;
