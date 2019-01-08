import styled      from '@emotion/styled';
import { H1 }      from '../style/styled-component';
import { pxToRem } from '../style/mixin';
import mq          from '../style/mq';

export const Title = styled(H1)``;

export const SectionWrapper = styled.div`
    margin: ${pxToRem(12)} 0;
    
    ${mq.tablet} {
        margin: ${pxToRem(26)} 0;
    }
    
    &:first-of-type {
        margin-top: 0;
    }
`;
