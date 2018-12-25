import styled      from '@emotion/styled';
import { pxToRem } from './helper/mixin';

export const Body = styled.body`
    background-color: ${({ theme }) => theme.backgroundColor.body};
    color: ${({ theme }) => theme.color.body};
    font-family: ${({ theme }) => theme.font};
`;

export const H1 = styled.h1`
    font-size: ${pxToRem(48)};
`;

export const H2 = styled.h2`
    font-size: ${pxToRem(40)};
`;

export const H3 = styled.h3`
    font-size: ${pxToRem(32)};
`;

export const H4 = styled.h4`
    font-size: ${pxToRem(24)};
`;

export const H5 = styled.h5`
    font-size: ${pxToRem(18)};
`;

export const H6 = styled.h6`
    font-size: ${pxToRem(16)};
`;

export const P = styled.p`
    font-size: ${pxToRem(16)};
`;

export const Caption = styled.caption`
    font-size: ${pxToRem(12)};
`;

export const Button = styled.button`
    padding: ${pxToRem(5)} ${pxToRem(10)};
    font-size: ${pxToRem(14)};
    font-weight: 600;
    color: ${({ theme }) => theme.color.button};
`;

export default {
    Body,
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
