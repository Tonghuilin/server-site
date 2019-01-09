import Styled                         from '@emotion/styled';
import { H4, Content as BaseContent } from '../style/styled-component';
import { Wrapper as QrWrapper }       from '../smart-button/qrButton.style';
import { pxToRem, rgba }              from '../style/mixin';
import mq                             from '../style/mq';

export const Wrapper = Styled.div`
    border-bottom: ${pxToRem(2)} solid ${props => rgba(props.theme.borderColor.common, 0.1)};
    text-align: center;
    padding: ${pxToRem(16)} 0 ${pxToRem(24)};
    
    ${mq.tabletLandscape} {
        padding: ${pxToRem(30)} 0;
    }
`;

export const Content = Styled(BaseContent)`
    position: relative;
`;

export const DecorWrapper = Styled.div`
    bottom: ${pxToRem(-57)};
    position: absolute;
    right: 0;
    z-index: -1;
    
    ${mq.tabletLandscape} {
        bottom: ${pxToRem(-63)};
    }
`;

export const Title = Styled(H4)``;

export const Body = Styled.div`
    margin: 1rem 0;
    position: relative;
`;

export const Section = Styled.div`
    margin: ${pxToRem(32)} 0;
`;

export const Paragraph = Styled.div`
    margin: ${pxToRem(8)} 0;
`;

export const InfoWrapper = Styled.div`
    align-items: center;
    border-bottom: ${pxToRem(1)} solid ${props => rgba(props.theme.borderColor.common, 0.1)};
    display: inline-flex;
    margin: 0 ${pxToRem(4)};
    position: relative;
    top: ${pxToRem(-4)};
    
    ${QrWrapper} {
        a {
            padding: 0;
            margin: 0;
        }
    }
`;

export const HighLight = Styled.span`
    color: ${props => props.theme.color.highlight};
    font-weight: bold;
`;
