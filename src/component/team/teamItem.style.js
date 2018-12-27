import Styled from '@emotion/styled';

export const Item = Styled.div(({ theme, index, reflective }) => {
    // add 1 offset to index for the reflective items
    const ind    = reflective ? index + 1 : index;
    const even   = ind % 2 === 0;
    const prefix = even ? '-' : '';

    return {
        transform: `translate(${prefix}${theme.pxToRem(25)})`,
    };
});

export const ItemInner = Styled.div`
    display: inline-block;
    animation: float 5s infinite;
    animation-delay: ${({ index }) => index * 0.8}s;
`;
