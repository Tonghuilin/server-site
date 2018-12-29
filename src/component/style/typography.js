import Styled from '@emotion/styled';

export const H1 = Styled.h1`
    font-size: ${({ theme }) => theme.pxToRem(48)};
`;

export const H2 = Styled.h2`
    font-size: ${({ theme }) => theme.pxToRem(40)};
`;

export const H3 = Styled.h3`
    font-size: ${({ theme }) => theme.pxToRem(32)};
`;

export const H4 = Styled.h4`
    font-size: ${({ theme }) => theme.pxToRem(24)};
`;

export const H5 = Styled.h5`
    font-size: ${({ theme }) => theme.pxToRem(18)};
`;

export const H6 = Styled.h6`
    font-size: ${({ theme }) => theme.pxToRem(16)};
`;

export const P = Styled.p`
    font-size: ${({ theme }) => theme.pxToRem(16)};
`;

export const Caption = Styled.caption`
    font-size: ${({ theme }) => theme.pxToRem(12)};
`;

export const Button = Styled.button(({ theme }) => ({
    backgroundColor: theme.backgroundColor.button,
    border:          'none',
    color:           theme.color.button,
    cursor:          'pointer',
    fontSize:        theme.pxToRem(14),
    fontWeight:      600,
    lineHeight:      1.5,
    padding:         `${theme.pxToRem(8)} ${theme.pxToRem(10)}`,
    transition:      `background-color ${theme.transition}`,

    '&:hover': {
        backgroundColor: theme.darken(theme.backgroundColor.button, 0.5),
    },
}));

export const Container = Styled.div`
    padding: 0 ${({ theme }) => theme.pxToRem(15)};
`;

export const Content = Styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.pxToRem(900)};
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
