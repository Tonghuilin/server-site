import styled                             from '@emotion/styled';
import { Container as BaseContainer, H1 } from '../typography';

export const Wrapper = styled.header`
`;

export const Container = styled(BaseContainer)`
    height: ${({ theme }) => theme.pxToRem(90)};
    display: flex;
    justify-content: space-between;
`;

export const Title = styled(H1)`
    margin: 0 0 0 10px;
`;

export const LeftWrapper = styled.div`
`;

export const RightWrapper = styled.div`
    display: flex;
`;
