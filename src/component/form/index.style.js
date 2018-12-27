import styled     from '@emotion/styled';
import { Button } from '../typography';

export const ButtonWrapper = styled.div`
    margin: ${({ theme }) => theme.pxToRem(16)} 0;
`;

export const SubmitButton = styled(Button)``;
