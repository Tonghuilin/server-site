import Styled                   from '@emotion/styled';
import { Button as BaseButton } from './index.style';

export const Button = Styled(BaseButton)`
    background-color: transparent;
    
    svg {
        fill: ${props => props.isDark ? undefined: props.theme.color.common }
    }
`;
