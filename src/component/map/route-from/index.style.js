import Styled      from '@emotion/styled';
import { H6 }      from '../../style/styled-component';
import { pxToRem } from '../../style/mixin';

export const Wrapper = Styled.div`
    padding: ${pxToRem(16)} 0;
`;

export const Heading = Styled(H6)`
    text-align: center;
`;
