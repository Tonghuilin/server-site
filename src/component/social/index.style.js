import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
`;

const h1 = styled.h1`
    font-size: 72px;
`;

export const Title = styled(h1)`
    color: red;
`;

export const List = styled.div`
    display: flex;
`;

export const Item = styled.button`
    background-color: ${({ theme }) => theme.color.primary};
    height: 33px;
    width: 33px;
    margin: 5px;
`;
