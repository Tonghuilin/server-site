import styled from '@emotion/styled';
import { H4 } from '../typography';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.common}; 
    text-align: center;
`;

export const Title = styled(H4)``;
