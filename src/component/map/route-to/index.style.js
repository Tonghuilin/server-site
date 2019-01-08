import Styled                       from '@emotion/styled';
import { Button as BaseButton, H6 } from '../../style/styled-component';
import { pxToRem }                  from '../../style/mixin';

export const Wrapper = Styled.div`
    text-align: center;
`;

export const Button = Styled(BaseButton)`
    margin-bottom: ${pxToRem(2)};
    margin-right: ${pxToRem(2)};
`;

export const Heading = Styled(H6)`
    margin: 0.5em;
`;

export const List = Styled.div`
    display: flex;
    justify-content: center;
`;
