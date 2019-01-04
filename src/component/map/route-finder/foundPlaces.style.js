import Styled            from '@emotion/styled';
import { pxToRem, rgba } from '../../style/mixin';

export const Wrapper = Styled.div`
    position: relative;
    
    &::before {
        background-color: ${props => rgba(props.theme.backgroundColor.common, 0.8)};
        content: '';
        height: ${pxToRem(316)};
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        width: 200%;
        z-index: 1;
    }
    
    &::after {
        bottom: ${pxToRem(-316)};
        box-shadow: ${pxToRem(0)} ${pxToRem(-13)} ${pxToRem(17)} ${pxToRem(-12)} ${props => props.theme.backgroundColor.common} inset;
        content: '';
        height: ${pxToRem(10)};
        position: absolute;
        width: 100%;
        z-index: 1;
    }
`;

export const List = Styled.ul`
    background-color: ${props => props.theme.backgroundColor.common};
    height: ${pxToRem(316)};
    list-style: none;
    margin: 0;
    overflow: auto;
    padding: ${pxToRem(12)} ${pxToRem(12)} ${pxToRem(12)} 0;
    position: absolute;
    width: 100%;
    z-index: 1;
`;

export const Item = Styled.li`
    display: flex;
    margin-bottom: ${pxToRem(6)};
    position: relative;
`;

export const Span = Styled.span`
    flex-basis: ${pxToRem(52)};
    flex-shrink: 0;
    margin-left: ${pxToRem(5)};
    
    &:first-of-type {
        margin-left: 0;
    }
`;

export const NameSpan = Styled(Span)`
    flex-basis: 100%;
    flex-shrink: 1;
`;
