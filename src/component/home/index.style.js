import styled from '@emotion/styled';
import { H1 } from '../typography';

export const Title = styled(H1)``;

export const SectionWrapper = styled.div(({ theme }) => ({
    marginBottom: theme.pxToRem(50),
}));
