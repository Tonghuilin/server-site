import Styled                                               from '@emotion/styled';
import { Button as BaseButton, Content as BaseContent, H1 } from '../style/styled-component';
import { pxToRem }                                          from '../style/mixin';
import mq                                                   from '../style/mq';

export const Wrapper = Styled.header`
    background-color: ${({ theme }) => theme.backgroundColor.header};
    height: ${pxToRem(60)};
    
    ${mq.tablet} {
        height: ${pxToRem(90)};
    }
`;

export const Content = Styled(BaseContent)`
    display: flex;
    height: 100%;
    justify-content: space-between;
`;

export const Title = Styled(H1)`
    margin: 0 0 0 10px;
    font-size: ${pxToRem(18)};
    
    ${mq.tablet} {
        font-size: ${pxToRem(28)};
    }
`;

export const LeftWrapper = Styled.div`
    display: flex;
    align-items: center;
    
    ${mq.tablet} {
        flex-basis: 30%;
    }
`;

export const RightWrapper = Styled.div`
    display: flex;
`;

export const Button = Styled(BaseButton)`
    height: 100%;
    width: ${pxToRem(60)};
    
    ${mq.tablet} {
        width: ${pxToRem(90)};
    }
`;
