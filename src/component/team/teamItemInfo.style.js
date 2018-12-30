import Styled      from '@emotion/styled';
import { H5, P }   from '../style/styled-component';
import { pxToRem } from '../style/mixin';
import mq          from '../style/mq';

export const Wrapper = Styled.div`
    margin-left: ${pxToRem(12)};
    
    ${mq.tablet} {
        margin-left: 0;
    }
`;

export const Title = Styled(H5)`
    margin: 0;
`;

export const Body = Styled.div`
    padding: ${pxToRem(6)} 0;
`;

export const Info = Styled(P)`
    margin-bottom: 0;
    
    &:first-of-type {
        margin-top: 0;
    }
`;
