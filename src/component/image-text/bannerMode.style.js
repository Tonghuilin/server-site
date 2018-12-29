import Styled      from '@emotion/styled';
import { H2 }      from '../style/styled-component';
import { pxToRem } from '../style/mixin';

export const Title = Styled(H2)`
    margin: 1rem 0;
`;

export const TextWrapper = Styled.div`
    background-color: ${props => props.textBackgroundColor};
    width:     100%;
    text-align: center;
    padding:   ${pxToRem(30)};
`;
