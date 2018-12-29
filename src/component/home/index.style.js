import styled      from '@emotion/styled';
import { H1 }      from '../style/styled-component';
import { pxToRem } from '../style/mixin';

export const Title = styled(H1)``;

export const SectionWrapper = styled.div`
    margin-bottom: ${pxToRem(50)};
`;
