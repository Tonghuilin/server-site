import styled      from '@emotion/styled';
import { H4 }      from '../style/styled-component';
import { pxToRem } from '../style/mixin';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.common};
    padding: ${pxToRem(10)} 0; 
    text-align: center;
`;

export const Title = styled(H4)``;
