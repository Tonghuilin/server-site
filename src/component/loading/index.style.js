import Styled      from '@emotion/styled';
import { pxToRem } from '../style/mixin';

export const Wrapper = Styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
`;

export const LoadingWrapper = Styled.div`
    display: inline-block;
    position: relative;
    width: ${props => pxToRem(props.width)};
    height: ${props => pxToRem(props.height)};
    
    & div {
        display: inline-block;
        position: absolute;
        left: 6px;
        width: 13px;
        background: ${props => props.color || props.theme.color.common};
        animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        
        &:nth-of-type(1) {
            left: 6px;
            animation-delay: -0.24s;
        }
        
        &:nth-of-type(2) {
            left: 26px;
            animation-delay: -0.12s;
        }

        &:nth-of-type(3) {
            left: 45px;
            animation-delay: 0;
        }
    }
`;


