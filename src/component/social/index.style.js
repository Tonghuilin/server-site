import styled                             from '@emotion/styled';
import { Container as BaseContainer, H5 } from '../typography';

export const Wrapper = styled.div`
    align-items: center;
    margin: ${({ theme }) => theme.pxToRem(30)} 0;
`;

export const Container = styled(BaseContainer)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled(H5)`
    margin: 0;
`;

export const List = styled.div`
    display: flex;
`;

export const Item = styled.a(({ theme }) => ({
    backgroundColor: theme.backgroundColor.button,
    display: 'block',
    margin: `0 ${theme.pxToRem(5)}`,
    padding: theme.pxToRem(8),
}));
