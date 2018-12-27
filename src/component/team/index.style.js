import Styled                             from '@emotion/styled';
import { H4, Container as ContainerBase } from '../typography';

export const Wrapper = Styled.div`
    text-align: center;
`;

export const Container = Styled(ContainerBase)`
    display: flex;
`;

export const TextWrapper = Styled.div`
    flex-basis: 100%;
    text-align: center;
`;

export const Title = Styled(H4)``;

export const Body = Styled.div`
`;

export const List = Styled.div`
    flex-basis: 25%;
    flex-shrink: 0;
`;

export const Item = Styled.div(({ theme, index, reflective }) => {
    // add 1 offset to index for the reflective items
    const ind    = reflective ? index + 1 : index;
    const even   = ind % 2 === 0;
    const prefix = even ? '-' : '';

    return {
        transform: `translate(${prefix}${theme.pxToRem(25)})`,
    };
});
