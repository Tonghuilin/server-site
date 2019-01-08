import styled                   from '@emotion/styled';
import { BLink, ReverseBLink, ReverseButton } from '../style/styled-component';
import { pxToRem }              from '../style/mixin';
import vars                     from '../style/variable';

export const OpenButton = styled(BLink)`
    margin: 0 ${pxToRem(5)};
    padding: ${pxToRem(8)};
`;
export const ReverseOpenButton = styled(ReverseBLink)`
    margin: 0 ${pxToRem(5)};
    padding: ${pxToRem(8)};
`;

export const CloseButton = styled(ReverseButton)`
    height: ${pxToRem(20)};
    padding: 0;
    position: absolute;
    right: ${pxToRem(2)};
    top: ${pxToRem(2)};
    width: ${pxToRem(20)};
`;

export const Popup = styled.div`
    background-color: ${props => props.theme.backgroundColor.common};
    border: ${pxToRem(2)} solid ${props => props.theme.borderColor.common};
    border-radius: ${pxToRem(5)};
    height: ${pxToRem(200)};
    left: 50%;
    padding: ${pxToRem(16)};
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: ${pxToRem(200)};
    transition: transform ${vars.transition};
    z-index: 1;
`;

export const Wrapper = styled.div`
    display: inline-block;
    position: relative;
    
    ${Popup} {
        box-shadow: 0 0 ${pxToRem(5)} 0;
        transform: ${props => props.open ? 'translate(-50%, -50%) scale(1)' : ''};
    }
`;
