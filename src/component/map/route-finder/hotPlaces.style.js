import Styled      from '@emotion/styled';
import { pxToRem } from '../../style/mixin';

export const List = Styled.div`
    display: flex;
    
    button {
        border-radius: ${pxToRem(5)};
        margin-right: ${pxToRem(8)};
    }
`;
