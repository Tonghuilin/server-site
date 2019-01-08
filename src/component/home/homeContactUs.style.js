import Styled                   from '@emotion/styled';
import { H4 }                   from '../style/styled-component';
import { Wrapper as QrWrapper } from '../smart-button/qrButton.style';
import { pxToRem, rgba }        from '../style/mixin';

export const Wrapper = Styled.div`
    border-bottom: ${pxToRem(1)} solid ${props => rgba(props.theme.borderColor.common, 0.1)};
    text-align: center;
    padding: ${pxToRem(8)} 0;
`;

export const Title = Styled(H4)``;

export const Body = Styled.div`
    margin: 1rem 0;
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
