import Styled                       from '@emotion/styled';
import { pxToRem, lighten, darken } from './mixin';
import variable                     from './variable';
import mq                           from './mq';
import color                        from './color';

export const H1 = Styled.h1`
    font-size: ${pxToRem(24)};
    margin: 1em 0;
    
    ${mq.tablet} {
        font-size: ${pxToRem(36)};
    }
    
    ${mq.tabletLandscape} {
        font-size: ${pxToRem(48)};
    }
`;

export const H2 = Styled.h2`
    font-size: ${pxToRem(22)};
    margin: 1em 0;
    
    ${mq.tablet} {
        font-size: ${pxToRem(32)};
    }
    
    ${mq.tabletLandscape} {
        font-size: ${pxToRem(40)};
    }
`;

export const H3 = Styled.h3`
    font-size: ${pxToRem(20)};
    margin: 1em 0;
    
    ${mq.tablet} {
        font-size: ${pxToRem(28)};
    }
    
    ${mq.tabletLandscape} {
        font-size: ${pxToRem(32)};
    }
`;

export const H4 = Styled.h4`
    font-size: ${pxToRem(18)};
    margin: 1em 0;
    
    ${mq.tablet} {
        font-size: ${pxToRem(24)};
    }
    
    ${mq.tabletLandscape} {
        font-size: ${pxToRem(24)};
    }
`;

export const H5 = Styled.h5`
    font-size: ${pxToRem(16)};
    margin: 1em 0;
    
    ${mq.tablet} {
        font-size: ${pxToRem(20)};
    }
    
    ${mq.tabletLandscape} {
        font-size: ${pxToRem(18)};
    }
`;

export const H6 = Styled.h6`
    font-size: ${pxToRem(14)};
    margin: 1em 0;
    
    ${mq.tablet} {
        font-size: ${pxToRem(16)};
    }
    
    ${mq.tabletLandscape} {
        font-size: ${pxToRem(16)};
    }
`;

export const SubHeading = Styled.span`
    color: ${lighten(color.dune, 0.4)};
    font-size: ${pxToRem(14)};
`;

export const P = Styled.p`
    font-size: ${pxToRem(14)};
    margin: 0.5em 0;
    
    ${mq.tablet} {
        font-size: ${pxToRem(14)};
    }
    
    ${mq.tablet} {
        font-size: ${pxToRem(16)};
    }
`;

export const Caption = Styled.caption`
    font-size: ${pxToRem(12)};
    
    ${mq.tablet} {
        font-size: ${pxToRem(12)};
    }
    
    ${mq.tabletLandscape} {
        font-size: ${pxToRem(12)};
    }
`;

export const Button = Styled.button`
    background-color: ${({ selected, theme }) =>
        selected ? theme.backgroundColor.highlight : theme.backgroundColor.button};
    border:          none;
    border-radius:    ${pxToRem(5)};
    color:           ${props => props.theme.color.button};
    cursor:          ${props => props.selected ? 'initial' : 'pointer'};
    font-size:        ${pxToRem(14)};
    font-weight:      600;
    line-height:      1.5;
    padding:         ${pxToRem(8)} ${pxToRem(10)};
    transition:      background-color ${variable.transition}, color ${variable.transition};

    &:hover {
        background-color: ${({ selected, theme }) => selected ? undefined : darken(theme.backgroundColor.button, 0.2)};
    }
    
    svg {
        height: 100%;
        width: 100%;
    }
`;


export const ReverseButton = Styled(Button)`
    background-color: transparent;
    color: ${props => props.isDark ? undefined : props.theme.color.common};

    &:hover {
        background-color: transparent;
        color: ${props => props.theme.color.highlight};
    }
`;

export const BLink = Styled.a`
    align-items:      center;
    background-color: ${props => props.theme.backgroundColor.button};
    border-radius:   ${pxToRem(5)};
    color:           ${props => props.theme.color.button};
    display:         flex;
    font-size:       ${pxToRem(14)};
    font-weight:     600;
    justify-content: center;
    line-height:     1.5;
    padding:         ${pxToRem(8)} ${pxToRem(10)};
    transition:      background-color ${variable.transition};
    text-decoration: none;
    
    &:hover {
        background-color: ${props => darken(props.theme.backgroundColor.button, 0.2)};
    }
`;

export const ReverseBLink = Styled(BLink)`
    background-color: transparent;
    color: ${props => props.isDark ? undefined : props.theme.color.common};

    &:hover {
        background-color: transparent;
        color: ${props => props.theme.color.highlight};
    }
`;

export const Container = Styled.div`
    padding: 0 ${pxToRem(15)};
`;

export const Content = Styled.div`
    width: 100%;
    max-width: ${pxToRem(900)};
    margin: auto;
`;

export const Img = Styled.img`
    height: auto;
    width: 100%;
`;

export default {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
    Caption,
    Button,
};
