import styled      from '@emotion/styled';
import { H1 }      from '../style/styled-component';
import { pxToRem } from '../style/mixin';
import mq          from '../style/mq';

export const Title = styled(H1)``;

export const SectionWrapper = styled.div`
    margin-bottom: ${pxToRem(24)};
    
    ${mq.tablet} {
        margin-bottom: ${pxToRem(54)};
    }
    
    &:last-of-type {
        margin-bottom: 0;
    }
`;
