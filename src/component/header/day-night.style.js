import Styled                   from '@emotion/styled';
import { Button as BaseButton } from '../style/typography';

export const Button = Styled(BaseButton)`
    background-color: transparent;
    margin: ${({ theme }) => theme.pxToRem(10)};
`;
