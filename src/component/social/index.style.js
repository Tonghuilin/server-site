import styled                                    from '@emotion/styled';
import { Container as BaseContainer, H5, BLink } from '../style/styled-component';
import { pxToRem }                               from '../style/mixin';

export const Wrapper = styled.div`
    align-items: center;
    margin: ${pxToRem(30)} 0;
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

export const Item = styled(BLink)`
    border-radius: ${pxToRem(5)};
    margin: 0 ${pxToRem(5)};
    padding: ${pxToRem(8)};
`;
