import Styled                   from '@emotion/styled';
import { Button as BaseButton } from '../style/styled-component';
import { pxToRem }              from '../style/mixin';

export const Button = Styled(BaseButton)`
    background-color: transparent;
    height: 100%;
    width: ${pxToRem(60)};
`;
