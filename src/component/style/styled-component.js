import Styled              from '@emotion/styled';
import { pxToRem, darken } from './mixin';
import variable            from './variable';
import mq                  from './mq';

export const H1 = Styled.h1`
    font-size: ${pxToRem(24)};
    
    ${mq.tablet} {
        font-size: ${pxToRem(36)};
    }
    
    ${mq.tabletLandscape} {
        font-size: ${pxToRem(48)};
    }
`;

export const H2 = Styled.h2`
    font-size: ${pxToRem(22)};
    
    ${mq.tablet} {
        font-size: ${pxToRem(32)};
    }
    
    ${mq.tabletLandscape} {
        font-size: ${pxToRem(40)};
    }
`;

export const H3 = Styled.h3`
    font-size: ${pxToRem(20)};
    
    ${mq.tablet} {
        font-size: ${pxToRem(28)};
    }
    
    ${mq.tabletLandscape} {
        font-size: ${pxToRem(32)};
    }
`;

export const H4 = Styled.h4`
    font-size: ${pxToRem(18)};
    
    ${mq.tablet} {
        font-size: ${pxToRem(24)};
    }
    
    ${mq.tabletLandscape} {
        font-size: ${pxToRem(24)};
    }
`;

export const H5 = Styled.h5`
    font-size: ${pxToRem(16)};
    
    ${mq.tablet} {
        font-size: ${pxToRem(20)};
    }
    
    ${mq.tabletLandscape} {
        font-size: ${pxToRem(18)};
    }
`;

export const H6 = Styled.h6`
    font-size: ${pxToRem(14)};
    
    ${mq.tablet} {
        font-size: ${pxToRem(16)};
    }
    
    ${mq.tabletLandscape} {
        font-size: ${pxToRem(16)};
    }
`;

export const P = Styled.p`
    font-size: ${pxToRem(14)};
    
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

export const Button = Styled.button(({ theme }) => ({
    backgroundColor: theme.backgroundColor.button,
    border:          'none',
    color:           theme.color.button,
    cursor:          'pointer',
    fontSize:        pxToRem(14),
    fontWeight:      600,
    lineHeight:      1.5,
    padding:         `${pxToRem(8)} ${pxToRem(10)}`,
    transition:      `background-color ${variable.transition}`,

    '&:hover': {
        backgroundColor: darken(theme.backgroundColor.button, 0.5),
    },
}));

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
