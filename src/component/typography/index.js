import styled      from '@emotion/styled';

export const H1 = styled.h1`
    font-size: ${({ theme }) => theme.pxToRem(48)};
`;

export const H2 = styled.h2`
    font-size: ${({ theme }) => theme.pxToRem(40)};
`;

export const H3 = styled.h3`
    font-size: ${({ theme }) => theme.pxToRem(32)};
`;

export const H4 = styled.h4`
    font-size: ${({ theme }) => theme.pxToRem(24)};
`;

export const H5 = styled.h5`
    font-size: ${({ theme }) => theme.pxToRem(18)};
`;

export const H6 = styled.h6`
    font-size: ${({ theme }) => theme.pxToRem(16)};
`;

export const P = styled.p`
    font-size: ${({ theme }) => theme.pxToRem(16)};
`;

export const Caption = styled.caption`
    font-size: ${({ theme }) => theme.pxToRem(12)};
`;

export const Button = styled.button(({ theme }) => ({
    backgroundColor: theme.backgroundColor.button,
    border: 'none',
    color: theme.color.button,
    fontSize: theme.pxToRem(14),
    fontWeight: 600,
    lineHeight: 1.5,
    padding: `${theme.pxToRem(8)} ${theme.pxToRem(10)}`,
}));

export const Container = styled.div`
    padding: 0 ${({ theme }) => theme.pxToRem(15)};
    width: 100%;
`;

export const Img = styled.img`
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
