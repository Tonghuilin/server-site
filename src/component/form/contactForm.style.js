import styled from '@emotion/styled';
import { H4 } from '../typography/index';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.common};
    padding: ${({ theme }) => theme.pxToRem(10)} 0; 
    text-align: center;
`;

export const Title = styled(H4)``;
