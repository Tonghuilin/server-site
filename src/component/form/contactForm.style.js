import Styled                          from '@emotion/styled';
import { H4 }                          from '../style/styled-component';
import { pxToRem, rgba }               from '../style/mixin';
import { Wrapper as TextInputWrapper } from '../input/text-input/index.style';

export const Wrapper = Styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.common};
    border-bottom: ${pxToRem(1)} solid ${props => rgba(props.theme.borderColor.common, 0.1)};
    padding: ${pxToRem(10)} 0; 
    text-align: center;
`;

export const Title = Styled(H4)``;


export const Row = Styled.div`
    display: inline-block;
    
    ${TextInputWrapper} {
        display: inline-block;
    }
`;
