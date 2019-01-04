import Styled                   from '@emotion/styled';
import { Button as BaseButton } from './index.style';
import { pxToRem }              from '../style/mixin';
import mq                       from '../style/mq';

export const Button = Styled(BaseButton)`
    background-color: transparent;
    padding: ${pxToRem(16)};

    svg {
        fill: ${props => props.isDark ? undefined : props.theme.color.common }
    }
    
    &:hover {
        background-color: transparent;
        
        svg {
            fill: ${props => props.theme.color.highlight};
        }
    }
    
    ${mq.tablet} {
        padding: ${pxToRem(24)};
    }
`;
