import styled     from '@emotion/styled';
import { Button } from '../style/styled-component';
import { pxToRem } from '../style/mixin';

export const ButtonWrapper = styled.div`
    margin: ${pxToRem(16)} 0;
`;

export const SubmitButton = styled(Button)`
`;
