import Styled                         from '@emotion/styled';
import { H4, Content as BaseContent } from '../style/styled-component';
import mq                             from '../style/mq';

export const Wrapper = Styled.div`
`;

export const Content = Styled(BaseContent)`
    display: flex;
    flex-wrap: wrap;
    
    ${mq.tablet} {
        flex-wrap: nowrap;
    }
`;

export const TextWrapper = Styled.div`
    flex-basis: 100%;
    text-align: center;
    order: -1;
    flex-shrink: 0;
    text-align: center;
    
    ${mq.tablet} {
        order: unset;
        flex-shrink: unset;
    }
`;

export const Title = Styled(H4)``;

export const Body = Styled.div`
`;

export const List = Styled.div`
    flex-basis: 100%;
    flex-shrink: 0;
    
    ${mq.tablet} {
        flex-basis: 25%;
        text-align: center;
    }
`;

