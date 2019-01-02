import Styled                   from '@emotion/styled';
import { Button as BaseButton } from '../../style/styled-component';

export const Title = Styled.span`
    background-color: ${props => props.theme.backgroundColor.highlight};
    color: ${props => props.theme.color.button};
    flex-basis: 25%;
    font-weight: bold;
    padding: 0.5rem 0.625rem;
    text-align: center;
`;

export const Button = Styled(BaseButton)`
    flex-basis: 25%;
`;
